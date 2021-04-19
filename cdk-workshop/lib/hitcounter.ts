import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as dynamodb from '@aws-cdk/aws-dynamodb';

export interface HitCounterProps {
    /** the function for which we want to count url hits **/
    downstream: lambda.IFunction;

    /**
     * The read capacity units for the table
     *
     * Must be greater than 5 and lower than 20
     *
     * @default 5
     */
    readCapacity?: number;
}

export class HitCounter extends cdk.Construct {

    /** allows accessing the counter function */
    public readonly handler: lambda.Function;
    public readonly table: dynamodb.Table;

    constructor(scope: cdk.Construct, id: string, props: HitCounterProps) {
        if (props.readCapacity !== undefined && (props.readCapacity < 5 || props.readCapacity > 20)) {
            throw new Error('readCapacity must be greater than 5 and lower than 20');
        }

        super(scope, id);

        this.table = new dynamodb.Table(this, 'Hits', {
            partitionKey: {name: 'path', type: dynamodb.AttributeType.STRING},
            serverSideEncryption: true,
            readCapacity: props.readCapacity ?? 5
        });

        this.handler = new lambda.Function(this, 'HitCounterHandler', {
            runtime: lambda.Runtime.NODEJS_10_X,
            handler: 'hitcounter.handler',
            code: lambda.Code.fromAsset('lambda'),
            environment: {
                DOWNSTREAM_FUNCTION_NAME: props.downstream.functionName,
                HITS_TABLE_NAME: this.table.tableName
            }
        });


        // grant the lambda role read/write permissions to our table
        // allow hitcounter lambda writes to the ddb table (error  not authorized to perform: dynamodb:UpdateItem on resource)
        this.table.grantReadWriteData(this.handler);
        // grant the lambda role invoke permissions to the downstream function
        // allow lambda endpoint (hello) to invoke hitcounter lambda  (error not authorized to perform: lambda:InvokeFunction)
        props.downstream.grantInvoke(this.handler);

    }
}

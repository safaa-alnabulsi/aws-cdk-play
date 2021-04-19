# AWS CDK Workshop

https://cdkworkshop.com/

The final example contains three lambdas, two endpoints (API GW) and one dynamodb.
- Hello: a lambda which is connected to an endpoint which can be triggered directly and it invokes another lambda.
- HitCounter: a lambda which is called internally by Hello lambda and stores an entry in dynamodb table. It counts the hits to speific path from Hello endpoint.
- TableView: a lmabda created with constructor library which reads from dynamodb table and has an endpoint which renders a UI of number of hits ( values of ddb table). Check the screenshot below.
  
![Table viewer](scrennshot.png)


## Installed libraries

```bash
npm install @aws-cdk/aws-lambda
npm install @aws-cdk/aws-apigateway
npm install @aws-cdk/aws-dynamodb
npm install cdk-dynamo-table-viewer
```

## Test
```bash
 npm run build & npx jest
````

## Referces
- https://docs.aws.amazon.com/cdk/api/latest/docs/@aws-cdk_aws-dynamodb.Table.html
- https://docs.aws.amazon.com/cdk/api/latest/docs/aws-lambda-readme.html
- https://docs.aws.amazon.com/cdk/api/latest/docs/aws-apigateway-readme.html
- https://www.npmjs.com/package/cdk-dynamo-table-viewer

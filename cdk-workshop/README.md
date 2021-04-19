# AWS CDK Workshop

https://cdkworkshop.com/

The final example contains three lambdas, two endpoints (API GW) and one dynamodb.
- Hello: a lambda which is connected to an endpoint which can be triggered directly and it invokes another lambda.
- HitCounter: a lambda which is called internally by Hello lambda and stores an entry in dynamodb table. It counts the hits to speific path from Hello endpoint.
- TableView: a lmabda created with constructor library which reads from dynamodb table and has an endpoint which renders a UI of number of hits ( values of ddb table). Check the screenshot below.
  
![Table viewer](scrennshot.png)


## installed libraries

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
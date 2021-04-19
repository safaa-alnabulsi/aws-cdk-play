# Welcome to your CDK TypeScript project!

This is a blank project for TypeScript development with CDK.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template

## Bootstrapping with the AWS CDK Toolkit

Bootstrapping is needed per account and region to be able to deploy cdk apps.
This should be done only once and before starting with cdk apps

```
 cdk bootstrap aws://accountId/eu-central-1
```

## Setup New project


- Create new project

```
 cdk init sample-app --language typescript
```

- install libs to work on
```
npm install @aws-cdk/aws-s3 @aws-cdk/aws-lambda

```


## Referces:
- https://docs.aws.amazon.com/cdk/latest/guide/work-with-cdk-typescript.html
- https://docs.aws.amazon.com/cdk/latest/guide/bootstrapping.html
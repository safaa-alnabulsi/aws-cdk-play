#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { AwsCdkPlayStack } from '../lib/aws-cdk-play-stack';
# customm imported
import * as s3 from '@aws-cdk/aws-s3';
import * as lambda from '@aws-cdk/aws-lambda';


const app = new cdk.App();
new AwsCdkPlayStack(app, 'AwsCdkPlayStack');

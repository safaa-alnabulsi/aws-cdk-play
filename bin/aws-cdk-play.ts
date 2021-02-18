#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { AwsCdkPlayStack } from '../lib/aws-cdk-play-stack';

const app = new cdk.App();
new AwsCdkPlayStack(app, 'AwsCdkPlayStack');

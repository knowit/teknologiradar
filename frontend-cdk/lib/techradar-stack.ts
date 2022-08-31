import { Stack, StackProps } from 'aws-cdk-lib';
import * as cloudfront from "aws-cdk-lib/aws-cloudfront";
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment';
import { Construct } from 'constructs';
import { FrontendDistributionAndCertsStack } from './frontendDistributionAndCertsStack';

export class TechradarStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const websiteBucket = new s3.Bucket(this, 'RadarHostingBucket', {
      websiteIndexDocument: 'index.html',
      publicReadAccess: true,
    });

    const s3Origin = new origins.S3Origin(websiteBucket);
    const distribution = new cloudfront.Distribution(this, 'RadarFrontendDistribution', {
      defaultBehavior: { origin: s3Origin, viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS },
      defaultRootObject: "index.html",
      priceClass: cloudfront.PriceClass.PRICE_CLASS_100 // Europe and NA only
    });

    new s3deploy.BucketDeployment(this, 'RadarFrontendBucketDeploy', {
      sources: [s3deploy.Source.asset('../frontend/build')],
      destinationBucket: websiteBucket,
      distribution,
      distributionPaths: ['/*'],
    });

    const deployUser = new iam.User(this, 'deploy_website');
    websiteBucket.grantWrite(deployUser);

    new FrontendDistributionAndCertsStack(websiteBucket, this);
  }
}


import { Stack } from 'aws-cdk-lib';
import * as acm from "aws-cdk-lib/aws-certificatemanager";
import * as cloudfront from "aws-cdk-lib/aws-cloudfront";
import * as r53 from 'aws-cdk-lib/aws-route53';
import * as r53_targets from 'aws-cdk-lib/aws-route53-targets';
import * as s3 from 'aws-cdk-lib/aws-s3';

export class FrontendDistributionAndCertsStack {
  constructor(domainname: string, websiteBucket: s3.Bucket, stack: Stack) {

    const hostedZone = r53.HostedZone.fromLookup(stack, "zone", { domainName: domainname })

    const cert = new acm.DnsValidatedCertificate(stack, 'CloudFrontTeknologiradarCertificate', {
      domainName: domainname,
      hostedZone: hostedZone,
      region: 'us-east-1',
    });

    const cloudfrontDist = new cloudfront.CloudFrontWebDistribution(stack, "TeknologiradarCloudFront", {
      originConfigs: [{
        behaviors: [{ isDefaultBehavior: true }],
        s3OriginSource: { s3BucketSource: websiteBucket }
      }],
      viewerCertificate: cloudfront.ViewerCertificate.fromAcmCertificate(cert, {
        aliases: [domainname]
      })
    });

    new r53.ARecord(stack, 'alias_' + domainname, {
      zone: hostedZone,
      target: r53.RecordTarget.fromAlias(new r53_targets.CloudFrontTarget(cloudfrontDist))
    });
  }
}
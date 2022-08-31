
import { Stack } from 'aws-cdk-lib';
import * as acm from "aws-cdk-lib/aws-certificatemanager";
import * as cloudfront from "aws-cdk-lib/aws-cloudfront";
import * as r53 from 'aws-cdk-lib/aws-route53';
import * as r53_targets from 'aws-cdk-lib/aws-route53-targets';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { exit } from 'process';

export class FrontendDistributionAndCertsStack {
  constructor(websiteBucket: s3.Bucket, stack: Stack) {

    var domain = process.env.TECH_RADAR_DOMAIN
    if (domain != undefined) {
      console.log('Updating frontend distribution, and issuing new certification for 🤳', domain);
    } else {
      console.log('🛑Domain environment variable not specified! Please set TECH_RADAR_DOMAIN a domain url to deploy to.');
      exit(1)
    }

    const hostedZone = r53.HostedZone.fromLookup(stack, "zone", { domainName: domain })

    if (hostedZone.hostedZoneId == "DUMMY") {
      console.error("🛑Failed to find a hosted zone with the domain name '" + domain + "'. A hosted zone with the domain name '" + domain + "' must manually be created in route53.")
      exit(1)
    }

    const cert = new acm.DnsValidatedCertificate(stack, 'CloudFrontTeknologiradarCertificate', {
      domainName: domain,
      hostedZone: hostedZone,
      region: 'us-east-1',
    });

    const cloudfrontDist = new cloudfront.CloudFrontWebDistribution(stack, "TeknologiradarCloudFront", {
      originConfigs: [{
        behaviors: [{ isDefaultBehavior: true }],
        s3OriginSource: { s3BucketSource: websiteBucket }
      }],
      viewerCertificate: cloudfront.ViewerCertificate.fromAcmCertificate(cert, {
        aliases: [domain]
      })
    });

    new r53.ARecord(stack, 'alias_' + domain, {
      zone: hostedZone,
      target: r53.RecordTarget.fromAlias(new r53_targets.CloudFrontTarget(cloudfrontDist))
    });
  }
}
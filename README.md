# Knowit Teknologiradar (Technology Radar)

Frontend for Knowit teknologiradar, based on [AOE Technology Radar](https://github.com/AOEpeople/aoe_technology_radar).

## Prerequisites

* Python 3.8+
* The [pandas](https://pandas.pydata.org/) python package 
    * to install run: `python3 -m pip install pandas`
* (To deploy) Being logged into AWS i.e., the [AWS CLI](https://aws.amazon.com/cli/) or with environment variables
    * You can log in with e.g., `aws sso login`
    * The AWS account must have permissions for 
        * S3
        * Route53
        * CloudFront
        * CertificateManager
        * CloudFormation
        * SSM

## Automatic installation and deployment

This section is indented to be a guide to deploy using CI, but can also be used to manually deploy.
For the most up-to-date CI script, see the defined GitHub actions in the [.github/workflows](.github/workflows) folder.

### Environment variables

To automatically deploy the frontend to AWS, the following environment variables must be set.
If logging into aws using the [AWS CLI](https://aws.amazon.com/cli/), this section can be ignored.

```bash
export AWS_ACCESS_KEY_ID="<redacted>"
export AWS_SECRET_ACCESS_KEY="<redacted>"

export AWS_DEFAULT_REGION="eu-central-1"
export CDK_DEFAULT_REGION="eu-central-1"
export CDK_DEFAULT_ACCOUNT="<redacted>"

export TECH_RADAR_DOMAIN="dev.teknologiradar-objectnet.knowit.no"
```

### Issue new ACM certificate

To issue a new certificate the `TECH_RADAR_DOMAIN` environment variable must be set to a domain url to deploy to.
A hosted zone with the same name as `TECH_RADAR_DOMAIN` in the correct AWS region must manually be created in route53.

Please note that if the current account does not have authorization to issue new certificates, the deploy will be stuck until it is canceled or the certificate manually validated.

```bash
#URLs used as of writing
#Production domain
export TECH_RADAR_DOMAIN="teknologiradar-objectnet.knowit.no"

#Development domain
export TECH_RADAR_DOMAIN="dev.teknologiradar-objectnet.knowit.no"
```

### Executing the deployment

To build and deploy the radar in one go, run

```bash
./install-and-deploy.sh
```

The script will first install and build the frontend as a static website then deploy it to aws using [cdk](https://aws.amazon.com/cdk/).

### Cancel a stuck deployment

See [Canceling a stack update](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn--stack-update-cancel.html). 

Alternatively, run the command:

```bash
aws cloudformation cancel-update-stack
```

### Github Actions workflows
* [deploy-dev.yml](.github/workflows/deploy-dev.yml) deploys website to the development environment ([dev.teknologiradar-objectnet.knowit.no](https://dev.teknologiradar-objectnet.knowit.no))
* [deploy-prod.yml](.github/workflows/deploy-prod.yml) deploys website to the production environment ([teknologiradar-objectnet.knowit.no](https://teknologiradar-objectnet.knowit.no))

`deploy-dev.yml` is triggered on pushes to main while `deploy-prod.yml` can be triggered manually on GitHub.

Both workflows use `reusable-install-and-deploy.yml`, which is a reusable workflow that installs and deploys the website to AWS development/production environment based on input.


## Manual Installation

### First time setup

For a first time setup run the `setup.sh` file

```bash
./setup.sh
```

The setup script will, in order:

1. Generate the radar files from data files in the `data` folder
2. Build the `frontend` project
3. Generate needed data files from the first set of generated radar files

To see the website you can either serve it statically or use live reload for further development

### Serving static frontend

```bash
cd frontend
npx serve -s build
```

### Live development

```bash
cd frontend
npm start
```

## Converting csv data to markdown

The website needs to have its data in a specific format. We prefer to use a single csv file for each revision. Therefore, we have a script which converts csv files to markdown files which the frontend understands.

```bash
python3 csv_to_md.py [csv] [out]
```

Where `[csv]` is the csv file path and `[out]` is the output directory path. To have the frontend display the csv data, `[out]` should be `./frontend/radar/YYYY-MM-DD`, where the date represents when the csv data was created.

### Deploying to AWS

To deploy you must be logged into the aws cli (e.g., with `aws sso login`), then run

```bash
cd frontend-cdk; cdk deploy; cd ..
```

## Data

You must be a knowit employee to view the raw data, but when (😉) you are, the categories can be found [here](https://docs.google.com/spreadsheets/d/1UmmJh3Xzj_wDKrjuN3HRArPzFoaOlyQTP_SlkCfLTfU/edit#gid=0) and the data for 2022 [here](https://docs.google.com/spreadsheets/d/1DGSFsPbbjRNZx7aKm8LuiVKB531cXOBI-hXieoIt0Ag/edit#gid=1741192413). 
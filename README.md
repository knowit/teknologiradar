# Knowit Teknologiradar (Technology Radar)

Frontend for Knowit teknologiradar, based on [AOE Technology Radar](https://github.com/AOEpeople/aoe_technology_radar).

The categories have been retrieved from https://docs.google.com/spreadsheets/d/1UmmJh3Xzj_wDKrjuN3HRArPzFoaOlyQTP_SlkCfLTfU/edit#gid=0 

Data from 2022 can be found at https://docs.google.com/spreadsheets/d/1DGSFsPbbjRNZx7aKm8LuiVKB531cXOBI-hXieoIt0Ag/edit#gid=1741192413

## Prerequisites

* Python 3.8+
* The [pandas](https://pandas.pydata.org/) python package 
    * to install run: `python3 -m pip install pandas`
* Being logged into AWS i.e., the [AWS CLI](https://aws.amazon.com/cli/) or with environment variables
    * You can log in with e.g., `aws sso login`

## Automatic installation and deployment

This is indented to be used by CI.

To install, build, and deploy the radar in one go, run

```bash
./install-and-deploy.sh
```

The script will first install and build the frontend as a static website then deploy it to aws using [cdk](https://aws.amazon.com/cdk/).

### Issue new ACM certificate

To issue a new certificate the `TECH_RADAR_ISSUE_NEW_CERT_TO_DOMAIN` environment variable must be set (any value will do) while running the install script above (or `cdk` cli commands).

```bash
export TECH_RADAR_ISSUE_NEW_CERT_TO_DOMAIN="dev.teknologiradar-objectnet.knowit.no"
```

To no longer 

Please note that if the current account does not have authorization to issue new certificates, the deploy will be stuck until it is canceled or the certificate manually validated.

### Cancel a stuck deployment

See [Canceling a stack update](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn--stack-update-cancel.html). 

Alternatively, run the command:

```bash
aws cloudformation cancel-update-stack
```

## Installation

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

## Import and convert csv data to markdown files

The website needs to have its data in a specific format. We prefer to use a single csv file for each revision. Therefor, we have a script which convert csv files to markdown files which the frontend understands.

```bash
python3 csv_to_md.py [csv] [out]
```

Where `[csv]` is the csv-file path and `[out]` is the output directory path, e.g., `./frontend/radar/<name>`.

### Deploying to AWS

To deploy you must be logged into the aws cli (e.g., with `aws sso login`), then run

```bash
cd frontend-cdk; cdk deploy; cd ..
```

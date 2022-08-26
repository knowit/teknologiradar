#!/bin/bash

start_folder="$(pwd)"
frontend_cdk_folder="frontend-cdk"

source ./scripts/common.sh

bash ./setup.sh || fatal "Failed to setup repository"

echo "📤 Deploying website"
cd "$start_folder/$frontend_cdk_folder" || fatal "Failed to find the frontend cdk folder"

echo "🔧 First time setup of frontend cdk"
npm install || fatal "Failed to run npm install for frontend-cdk"

echo "👾 Checking whether you are logged into aws"
npx cdk diff -v
#check_dependency "npx cdk diff" "🕵️ You are not logged into the AWS. Either run 'aws sso login' or set AWS environment variables. See https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html#envvars-set"
echo "🤑 You're logged in!"

npx cdk bootstrap || fatal "Failed to bootstrap cdk. Have you specified your environment? These can be set with CDK_DEFAULT_ACCOUNT and CDK_DEFAULT_REGION. See https://docs.aws.amazon.com/cdk/v2/guide/environments.html"

echo "📝 Displaying infrastructure difference built"
npx cdk diff || fatal "Failed to diff infrastructure changes"
echo "📈 Deploying changes to aws"
npx cdk deploy || fatal "Failed to deploy to aws"

echo "💫🏋🏿🧙🏿‍♂️ Done!"
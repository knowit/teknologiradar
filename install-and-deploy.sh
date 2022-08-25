#!/bin/bash

start_folder="$(pwd)"
frontend_cdk_folder="frontend-cdk"

source ./scripts/common.sh

echo "👾 Checking if you are logged into aws"
check_dependency "aws sts get-caller-identity > /dev/null" "🕵️You are not logged into the aws cli"
echo "🤑 You're logged in!"

bash ./setup.sh || fatal "Failed to setup repository"

echo "📤 Deploying website"
cd "$start_folder/$frontend_cdk_folder" || fatal "Failed to find the frontend cdk folder"

echo "🔧 First time setup of frontend cdk"
npm install || fatal "Failed to run npm install for frontend-cdk"

echo "📝 Displaying infrastructure difference built"
cdk diff || fatal "Failed to diff infrastructure changes"
echo "📈 Deploying changes to aws"
cdk deploy || fatal "Failed to deploy to aws"

echo "💫🏋🏿🧙🏿‍♂️ Done!"
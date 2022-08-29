#!/bin/bash

start_folder="$(pwd)"
frontend_cdk_folder="frontend-cdk"

source ./scripts/common.sh

bash ./setup.sh || fatal "Failed to setup repository"

echo "📤 Deploying website"
cd "$start_folder/$frontend_cdk_folder" || fatal "Failed to find the frontend cdk folder"

echo "🔧 First time setup of frontend cdk"
npm install || fatal "Failed to run npm install for frontend-cdk"

echo "👾 Checking if you are logged into aws"
check_dependency "npx cdk list" "🕵️ You are not logged into the aws cli"
echo "🤑 You're logged in!"

echo "📝 Displaying infrastructure difference built"
npx cdk diff || fatal "Failed to diff infrastructure changes"
echo "📈 Deploying changes to aws"
npx cdk deploy || fatal "Failed to deploy to aws"

echo "💫🏋🏿🧙🏿‍♂️ Done!"
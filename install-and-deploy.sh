#!/bin/bash

start_folder="$(pwd)"
data_folder="data"
frontend_folder="frontend"
frontend_cdk_folder="frontend-cdk"
radar_folder="$frontend_folder/radar"

fatal() {
    echo "⛔️$*" >&2
    exit 1
}

#arg 1: the command to run, the exit code will be checked
#arg 2: the error message to display if the command failes to return exitcode 0
check_dependency () {
    err_msg="$2"
    test_cmd="$1"
    # echo "Running test command '$test_cmd'"
    eval "$test_cmd 1>/dev/null 2>&1"
    exit_code=$?
    if [[ ! "$exit_code" -eq "0" ]]; then
        echo "⛔️cmd executed: $test_cmd" >&2
        fatal "$err_msg"
    fi
}

echo "🤖 Check whether dependencies are installed"
check_dependency "test $(python3 --version | perl -pe 'if(($_)=/((?<=Python 3\.)[0-9]+)/){$_.="\n"}') -gt 8" "🚧Python 3.8+ is required"
check_dependency "python3 -c \"import pandas\"" "🤒 Failed to find the pandas module for python"
check_dependency "cdk --version" "🤕 Failed to find AWS cdk" 
check_dependency "npm --version" "🤧 Failed to find npm"
check_dependency "aws sts get-caller-identity > /dev/null" "🕵️You are not logged into the aws cli"

echo "🤩 All dependencies found! "

echo "🪚 Generating the radar files"
for file in "${data_folder}"/*.csv; do
    base_filename="${file##*/}"
    echo "🪵 Generating radar files from $base_filename"
    python3 csv_to_md.py "$file" "$radar_folder/$base_filename" || fatal "😵‍💫 Failed to generate markdown files from $file to $radar_folder/$base_filename. Python3.9+ is required"
done
echo "🛖 Generated radar markdown files successfully"

# Build the website

echo "🧰 Building the website"

cd $frontend_folder || fatal "Failed to find the frontend folder!"

echo "🔧 First time setup of website frontend"
npm install || fatal "Failed to run npm install for frontend"
echo "🔨 Compiling files"
npm run build || fatal "Failed to build frontend"
echo "🔩 Generating json files files"
./dist_scripts/scripts/generateJson.js || fatal "Failed to generate the rd.json file"
echo "🛠 Creating static files"
./dist_scripts/scripts/createStaticFiles.js || fatal "failed to create the static files"
 
echo "🛌 Website built"

echo "📤 Deploying website"
cd "$start_folder/$frontend_cdk_folder" || fatal "Failed to find the frontend cdk folder"

echo "🔧 First time setup of frontend cdk"
npm install || fatal "Failed to run npm install for frontend-cdk"

echo "📝 Displaying infrastructure difference built"
cdk diff || fatal "Failed to diff infrastructure changes"
echo "📈 Deploying changes to aws"
cdk deploy || fatal "Failed to deploy to aws"

echo "💫🏋🏿🧙🏿‍♂️ Done!"
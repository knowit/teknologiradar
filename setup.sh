#!/bin/bash

data_folder="data"
frontend_folder="frontend"
radar_folder="$frontend_folder/radar"
min_python3_minor_version="8"

source ./scripts/common.sh

echo "π€ Check whether dependencies are installed"
check_dependency "test $(python3 --version | perl -pe 'if(($_)=/((?<=Python 3\.)[0-9]+)/){$_.="\n"}') -ge $min_python3_minor_version" "π§Python 3.$min_python3_minor_version+ is required, you have $(python3 --version)"
check_dependency "python3 -c \"import pandas\"" "π€ Failed to find the pandas module for python. run: python3 -m pip install pandas"
check_dependency "npm --version" "π€§ Failed to find npm. Suggestion: use nvm https://github.com/nvm-sh/nvm"
check_dependency "node --version" "π³ Failed to find node. Suggestion: use nvm https://github.com/nvm-sh/nvm"

echo "π€© All dependencies found! "

echo "πͺ Generating the radar files"
for file in "${data_folder}"/*.csv; do
    base_filename="${file##*/}"
    revision_folder_name="${base_filename%.csv}"
    echo "πͺ΅ Generating radar files from $base_filename"
    python3 csv_to_md.py "$file" "$radar_folder/$revision_folder_name" || fatal "π΅βπ« Failed to generate markdown files from $file to $radar_folder/$base_filename."
done
echo "π Generated radar markdown files successfully"

# Build the website

echo "π§° Building the website"

cd $frontend_folder || fatal "Failed to find the frontend folder!"

echo "π§ First time setup of website frontend"
npm install || fatal "Failed to run npm install for frontend"
echo "π¨ Compiling files"
npm run build || fatal "Failed to build frontend"
echo "π© Generating json files files"
node ./dist_scripts/scripts/generateJson.js || fatal "Failed to generate the rd.json file"
echo "π  Creating static files"
node ./dist_scripts/scripts/createStaticFiles.js || fatal "failed to create the static files"
 
echo "π Website built"
#!/bin/bash
# I don't think you need this, make sure you install deps with npm install -s,
# then you can install of them with just npm install
if [[ $# -gt 0 ]]
  then
    infile=$1
  else
    infile="app.js"
fi
echo "Installing node app dependencies for $infile..."
cat $infile | grep -v "[\.\/]" | grep -Po "(?<=require\([\"']).+(?=[\"']\))" | while read module
do
  echo "Found dependency $module"
  npm install --save $module
done
echo "All done!"

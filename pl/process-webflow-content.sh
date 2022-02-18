#!/bin/bash
FILE_TO_PROCESS=$1

if [ "$FILE_TO_PROCESS" == "" ]; then
  echo "Please supply file name to be processed as first argument."
  exit
fi

ASSETS_DIRECTORY="assets/${FILE_TO_PROCESS/.html/""}"

echo "Updating links to CSS files in $FILE_TO_PROCESS"
sed -i "s#href=\"css#href=\"$ASSETS_DIRECTORY/css#g" $FILE_TO_PROCESS

echo "Updating links to images in $FILE_TO_PROCESS"
sed -i "s#href=\"images#href=\"$ASSETS_DIRECTORY/images#g" $FILE_TO_PROCESS
sed -i "s#src=\"images#src=\"$ASSETS_DIRECTORY/images#g" $FILE_TO_PROCESS
sed -i "s#srcset=\"images#srcset=\"$ASSETS_DIRECTORY/images#g" $FILE_TO_PROCESS

echo "Updating links to JS files in $FILE_TO_PROCESS"
sed -i "s#src=\"js#src=\"$ASSETS_DIRECTORY/js#g" $FILE_TO_PROCESS

echo "Done."

#!/bin/bash

cd src

# bash globbing not entirely recursive?
FILES="$(echo **/*.org) $(echo **/**/*.org)"

for ORG_FILE in $FILES
do
    FILENAME=$(basename $ORG_FILE .org)

    DIRNAME=$(dirname $ORG_FILE)
    OUTPUT=${DIRNAME}/${FILENAME}.md

    pandoc $ORG_FILE --standalone --from org+smart --filter org-meta-filter --output $OUTPUT
done

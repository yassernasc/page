#!/bin/bash

cd src

for ORG_FILE in **/*.org
do
    FILENAME=$(basename $ORG_FILE .org)

    DIRNAME=$(dirname $ORG_FILE)
    OUTPUT=${DIRNAME}/${FILENAME}.md

    pandoc $ORG_FILE --standalone --from org+smart --filter org-meta-filter --output $OUTPUT
done

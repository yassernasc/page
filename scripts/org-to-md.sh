#!/bin/bash

cd src/pages/

for ORG_FILE in *.org
do
    FILENAME=$(basename $ORG_FILE .org)
    pandoc $ORG_FILE --standalone --from org+smart --filter org-meta-filter --output ${FILENAME}.md
done

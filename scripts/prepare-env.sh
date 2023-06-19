#!/bin/bash

# download pandoc's binary
curl -L -o pandoc.tar.gz https://github.com/jgm/pandoc/releases/download/3.1.3/pandoc-3.1.3-linux-amd64.tar.gz

# uncompress
tar xf pandoc.tar.gz

# move pandoc binary to a folder included by the PATH env variable
mv pandoc-*/bin/pandoc /usr/local/bin/

# install pandoc's filter
npm install -g org-meta-filter

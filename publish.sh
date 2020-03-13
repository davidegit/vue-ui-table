#!/usr/bin/env sh

set -e

npm run docs

npm run build-lib
echo 'vue-ui-table buildato'

npm publish --access=public
echo 'vue-ui-table publicato correttamente'
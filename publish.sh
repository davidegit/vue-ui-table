#!/usr/bin/env sh

set -e

npm run build-lib
cp -a src/assets/scss dist/scss
echo 'vue-ui-table buildato'

npm publish --access=public
echo 'vue-ui-table publicato correttamente'
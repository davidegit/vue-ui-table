#!/usr/bin/env sh

set -e

rm -rf dist/*
npm run build-lib
echo 'vue-ui-table buildato'

npm publish --access=public
echo 'vue-ui-table publicato correttamente'
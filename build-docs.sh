#!/usr/bin/env sh

set -e

npm run build
echo 'vue-ui-table docs buildato'

rm -rf docs/*
cp -r dist/ docs/
echo 'vue-ui-table docs aggiornata'

git add -A
git commit -m 'Aggiornamento docs'
git push
echo 'vue-ui-table docs pushata'
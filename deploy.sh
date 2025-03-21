#!/bin/bash

mkdir deployable
mv dist deployable/

git stash push -- ./deployable
git checkout gh-pages
git stash pop

mv deployable/dist/* .

git add --all
git commit -m "new deploy"
git push origin gh-pages

git checkout master

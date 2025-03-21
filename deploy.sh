#!/bin/bash

# First you MUST DO THE FOLLOWING:
#	npm install
#	npm run build
#	rm -rf node_modules package-lock.json
#
# This will create the dist directory without any of the npm artifacts. Removing build items is SUPER IMPORTANT (node_modules and lock.json)

echo "Did you build and clean out the repo as noted?"
echo "MUST read comments at the top of this file!!"
echo " "
echo "Any button to continue.."
read 

# move to dist out
mv dist ..

# go to deployment branch
git checkout gh-pages

# clean assets to ensure nothing is leftover
rm -rf assets

mv ../dist/assets .

# overwrite index.html
mv ../dist/index.html .	
sed -ie "s|=\"/assets/index.|=\"./assets/index.|g" index.html

# overwrite icon
mv ../dist/favicon.ico .

git add --all
git commit -m "new deploy"
git push origin gh-pages

git checkout master

# cleanup
rmdir ../dist/assets
rmdir ../dist

exit 0

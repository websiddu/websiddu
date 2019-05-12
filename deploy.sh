#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn build

# navigate into the build output directory
cd .vuepress/dist
# cp -R /Users/gsid/Work/personal/websiddu/portfolio.websiddu.com/dist portfolio

# if you are deploying to a custom domain
echo 'websiddu.com' > CNAME

git add -A
git commit -m 'deploy'

git push -f git@github.com:websiddu/websiddu.git master:gh-pages

cd -

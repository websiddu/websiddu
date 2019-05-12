#!/usr/bin/env sh

# abort on errors
set -e

mv .vuepress/dist/.git .vuepress/

# build
yarn build

# navigate into the build output directory
mv .vuepress/.git .vuepress/dist/
cd .vuepress/dist
# cp -R /Users/gsid/Work/personal/websiddu/portfolio.websiddu.com/dist portfolio

# if you are deploying to a custom domain
echo 'websiddu.com' > CNAME

git add -A
git commit -m "Deployed at `date +'%Y-%m-%d %H:%M:%S'`"

git push -f git@github.com:websiddu/websiddu.git master:gh-pages

cd -

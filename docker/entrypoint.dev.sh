#!/bin/bash

#set -eu

if [ -z $WWWROOT ]; then
    $WWWROOT="/workspaces/zmw-pingfen/dist"
fi
cd $WWWROOT/..
echo "export URL_PATH=" > ~/.bashrc
npm config set registry https://registry.npm.taobao.org
# npm install
# npm run build
# cp -rf pre-dist/* dist/

# /render-templates.sh /etc/nginx/sites-templates /etc/nginx/conf.d
# cat $WWWROOT/../head.html.tmpl $WWWROOT/index.html >$WWWROOT/index.html.tmpl
# rm -f $WWWROOT/index.html
# /render-templates.sh $WWWROOT $WWWROOT
# /render-templates.sh $WWWROOT/static $WWWROOT/static


# nginx -g 'daemon off;'
# exec $@
#npm run build-web
#npm run start-web 


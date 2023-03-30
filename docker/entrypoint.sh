#!/bin/bash

#set -eu

if [ -z $WWWROOT ]; then
    $WWWROOT="/wwwroot/dist"
fi
/render-templates.sh /etc/nginx/sites-templates /etc/nginx/conf.d
#cp -f $WWWROOT/../index_dev.html $WWWROOT/index.html.tmpl
  #cat $WWWROOT/../head.html.tmpl $WWWROOT/index.html >$WWWROOT/index.html.tmpl
  cat $WWWROOT/index.html >$WWWROOT/index.html.tmpl
/render-templates.sh $WWWROOT $WWWROOT
# /render-templates.sh $WWWROOT/static $WWWROOT/static
/render-templates.sh $WWWROOT/public $WWWROOT/public
if [ -z $DEBUG ]; then
   nginx -g 'daemon off;'
else
   nginx
   cd $WWWROOT/..
   exec $@
fi
#npm run build-web
#npm run start-web


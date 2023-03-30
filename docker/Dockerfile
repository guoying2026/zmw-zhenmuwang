FROM nginx:1.19.10

ADD sources.list /etc/apt/sources.list
ADD node-v19.6.0-linux-x64.tar.xz /usr/local
ADD render-templates.sh /render-templates.sh
ADD substitute-env-vars.sh /substitute-env-vars.sh
ADD sites-enabled/*tmpl    /etc/nginx/sites-templates/
ADD install.sh    /install.sh
RUN mkdir -p /wwwroot/dist


ENV SITE_DOMAIN localhost
ENV WWWROOT /wwwroot
ENV PREWWWROOT /wwwroot
ENV URL_PATH ''
ENV TRACK_ENABLE false
ENV TRACK_HOST ''
ENV TRACK_PROJECT ''
ENV TRACK_STORE ''

RUN chmod 777 /usr/local/node-v19.6.0-linux-x64/bin/*
RUN chmod 777 /usr/bin
RUN ln -s /usr/local/node-v19.6.0-linux-x64/bin/* /usr/bin
RUN apt-get update && apt-get install -y curl vim subversion && rm -rf /var/lib/apt/lists/*
RUN chmod +x /*.sh
#RUN /install.sh

RUN mkdir -p /etc/nginx/sites-templates
ADD nginx.conf /etc/nginx/nginx.conf
RUN rm -f /etc/nginx/conf.d/default.conf

ADD app.tar    /wwwroot
# RUN ["/bin/bash", "-c", "set -o pipefail && set -o pipefail && cd /wwwroot && npm config set registry https://mirrors.huaweicloud.com/repository/npm/ && npm install vue@3.2.45 -g --save"]
# RUN ["/bin/bash", "-c", "set -o pipefail && set -o pipefail && cd /wwwroot && npm config set registry https://mirrors.huaweicloud.com/repository/npm/ && npm install vite@4.1.0 -g --save"]
# RUN ["/bin/bash", "-c", "set -o pipefail && set -o pipefail && cd /wwwroot && npm config set registry https://mirrors.huaweicloud.com/repository/npm/ && npm install @vitejs/plugin-vue@4.0.0 -g --save"]
# RUN ["/bin/bash", "-c", "set -o pipefail && set -o pipefail && cd /wwwroot && npm config set registry https://mirrors.huaweicloud.com/repository/npm/ && npm install element-plus@2.2.29 -g --save"]
# RUN ["/bin/bash", "-c", "set -o pipefail && set -o pipefail && cd /wwwroot && npm config set registry https://mirrors.huaweicloud.com/repository/npm/ && npm install pinia@2.0.30 -g --save"]
# RUN ["/bin/bash", "-c", "set -o pipefail && set -o pipefail && cd /wwwroot && npm config set registry https://mirrors.huaweicloud.com/repository/npm/ && npm install unplugin-auto-import@0.14.2 -g --save"]
# RUN ["/bin/bash", "-c", "set -o pipefail && set -o pipefail && cd /wwwroot && npm config set registry https://mirrors.huaweicloud.com/repository/npm/ && npm install unplugin-vue-components@0.23.0 -g --save"]
# RUN ["/bin/bash", "-c", "set -o pipefail && set -o pipefail && cd /wwwroot && npm config set registry https://mirrors.huaweicloud.com/repository/npm/ && npm install axios@1.3.3 -g --save"]
# RUN ["/bin/bash", "-c", "set -o pipefail && set -o pipefail && cd /wwwroot && npm config set registry https://mirrors.huaweicloud.com/repository/npm/ && npm install jsonwebtoken@9.0.0 -g --save"]
# RUN ["/bin/bash", "-c", "set -o pipefail && set -o pipefail && cd /wwwroot && npm config set registry https://mirrors.huaweicloud.com/repository/npm/ && npm install mockjs@1.1.0 -g --save"]
# RUN ["/bin/bash", "-c", "set -o pipefail && set -o pipefail && cd /wwwroot && npm config set registry https://mirrors.huaweicloud.com/repository/npm/ && npm install pinia-plugin-persistedstate@3.1.0 -g --save"]
# RUN ["/bin/bash", "-c", "set -o pipefail && set -o pipefail && cd /wwwroot && npm config set registry https://mirrors.huaweicloud.com/repository/npm/ && npm install qrcode.vue@3.3.4 -g --save"]
# RUN ["/bin/bash", "-c", "set -o pipefail && set -o pipefail && cd /wwwroot && npm config set registry https://mirrors.huaweicloud.com/repository/npm/ && npm install vue-router@4.1.6 -g --save"]
# RUN ["/bin/bash", "-c", "set -o pipefail && set -o pipefail && cd /wwwroot && npm config set registry https://mirrors.huaweicloud.com/repository/npm/ && npm install sass@1.59.3 -g --save"]

# RUN ["/bin/bash", "-c", "set -o pipefail && set -o pipefail && cd /wwwroot && npm config set registry https://mirrors.huaweicloud.com/repository/npm/ && npm install vue@3.2.45"]
# RUN ["/bin/bash", "-c", "set -o pipefail && set -o pipefail && cd /wwwroot && npm config set registry https://mirrors.huaweicloud.com/repository/npm/ && npm install vite@4.1.0"]
# RUN ["/bin/bash", "-c", "set -o pipefail && set -o pipefail && cd /wwwroot && npm config set registry https://mirrors.huaweicloud.com/repository/npm/ && npm install @vitejs/plugin-vue@4.0.0"]
# RUN ["/bin/bash", "-c", "set -o pipefail && set -o pipefail && cd /wwwroot && npm config set registry https://mirrors.huaweicloud.com/repository/npm/ && npm install element-plus@2.2.29"]
# RUN ["/bin/bash", "-c", "set -o pipefail && set -o pipefail && cd /wwwroot && npm config set registry https://mirrors.huaweicloud.com/repository/npm/ && npm install pinia@2.0.30"]
# RUN ["/bin/bash", "-c", "set -o pipefail && set -o pipefail && cd /wwwroot && npm config set registry https://mirrors.huaweicloud.com/repository/npm/ && npm install unplugin-auto-import@0.14.2"]
# RUN ["/bin/bash", "-c", "set -o pipefail && set -o pipefail && cd /wwwroot && npm config set registry https://mirrors.huaweicloud.com/repository/npm/ && npm install unplugin-vue-components@0.23.0"]
# RUN ["/bin/bash", "-c", "set -o pipefail && set -o pipefail && cd /wwwroot && npm config set registry https://mirrors.huaweicloud.com/repository/npm/ && npm install axios@1.3.3"]
# RUN ["/bin/bash", "-c", "set -o pipefail && set -o pipefail && cd /wwwroot && npm config set registry https://mirrors.huaweicloud.com/repository/npm/ && npm install jsonwebtoken@9.0.0"]
# RUN ["/bin/bash", "-c", "set -o pipefail && set -o pipefail && cd /wwwroot && npm config set registry https://mirrors.huaweicloud.com/repository/npm/ && npm install mockjs@1.1.0"]
# RUN ["/bin/bash", "-c", "set -o pipefail && set -o pipefail && cd /wwwroot && npm config set registry https://mirrors.huaweicloud.com/repository/npm/ && npm install pinia-plugin-persistedstate@3.1.0"]
# RUN ["/bin/bash", "-c", "set -o pipefail && set -o pipefail && cd /wwwroot && npm config set registry https://mirrors.huaweicloud.com/repository/npm/ && npm install qrcode.vue@3.3.4"]
# RUN ["/bin/bash", "-c", "set -o pipefail && set -o pipefail && cd /wwwroot && npm config set registry https://mirrors.huaweicloud.com/repository/npm/ && npm install vue-router@4.1.6"]
# RUN ["/bin/bash", "-c", "set -o pipefail && set -o pipefail && cd /wwwroot && npm config set registry https://mirrors.huaweicloud.com/repository/npm/ && npm install sass@1.59.3"]

RUN ["/bin/bash", "-c", "set -o pipefail && set -o pipefail && cd /wwwroot && npm config set registry https://mirrors.huaweicloud.com/repository/npm/ && npm install"]
#RUN ["/bin/bash", "-c", "set -o pipefail && set -o pipefail && cd /wwwroot && npm config set registry https://registry.npm.taobao.org && npm install"]
#RUN ["/bin/bash", "-c", "set -o pipefail && cd /wwwroot && npm run lint"]
RUN ["/bin/bash", "-c", "set -o pipefail && cd /wwwroot && npm run build"] 
# RUN ["/bin/bash", "-c", "set -o pipefail && cd /wwwroot && cp -rf pre-dist/* dist/"]

#RUN cd /wwwroot && npm --registry https://registry.npm.taobao.org install
#RUN cd /wwwroot && npm install -g cnpm --registry=https://registry.npm.taobao.org && cnpm install
VOLUME ["/localroot"]
EXPOSE 80
ADD entrypoint.sh /entrypoint.sh
RUN chmod +x /*.sh
ENTRYPOINT ["/entrypoint.sh"]

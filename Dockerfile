FROM node
MAINTAINER Thibault Maekelbergh <thibault.maekelbergh@icloud.com>

ENV ROOT /var/www/silentschiedam

RUN mkdir -p $ROOT
WORKDIR $ROOT

RUN npm install -g forever

COPY package.json $ROOT
RUN npm install

COPY . $ROOT

EXPOSE 3000

CMD ["npm", "start"]

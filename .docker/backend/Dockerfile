FROM node:19.7.0-buster
WORKDIR /var/www
RUN apt update && apt dist-upgrade
RUN yarn global add @nestjs/cli@^9.2.0
COPY backend/package.json .
RUN yarn install
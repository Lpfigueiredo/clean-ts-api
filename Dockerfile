FROM node:12
WORKDIR /clean-node-api
COPY ./package.json .
RUN npm install --only=prod

FROM node:14.17.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY index.js ./
COPY lib ./lib

EXPOSE 3000
CMD [ "npm", "start" ]

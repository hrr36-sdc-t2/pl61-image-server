FROM node:11

WORKDIR /server

COPY package.json .
COPY package-lock.json .
COPY LICENSE .
COPY README.md .
COPY /server ./server
COPY /images ./images

RUN npm i

EXPOSE 2999

CMD [ "npm", "start" ]
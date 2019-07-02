FROM node:10.16.0-alpine
ADD package.json /app/
WORKDIR /app
RUN npm install -s --production

ADD ./lib /app/lib

EXPOSE 3000
CMD npm start

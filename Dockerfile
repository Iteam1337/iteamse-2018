FROM node:10

COPY package.json /app/
WORKDIR /app

# npm install
RUN npm install --silent

# Add all them files
COPY ./public ./public
COPY ./src ./src
COPY ./typings ./typings
COPY ./tsconfig.json ./tsconfig.json
COPY ./tslint.json ./tslint.json
COPY ./razzle.config.js ./razzle.config.js

EXPOSE 3001

# Build it and RUN IT!
CMD ["sh", "-c", "npm run build && npm run start:prod"]

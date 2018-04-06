FROM node:9

COPY package.json /app/
WORKDIR /app

# npm install
RUN npm install --silent

# Add all them files
COPY ./.babelrc ./
COPY ./public ./public
COPY ./src ./src

EXPOSE 3001

# Build it and RUN IT!
CMD ["sh", "-c", "npm run build && npm run start:prod"]

# Iteam.se

The iteam.se website using content served from [Contentful](http://contentful.com/) 🎉

## Getting started

```
$ git clone https://github.com/Iteam1337/iteamse.git
$ cd iteamse
$ npm install
$ npm start
```

### Environment setup

Add a `.env.local` file in the root of this project and set the following values to the correct url (the example is for a local instance of the [API](https://github.com/Iteam1337/iteamse-cms))

```
RAZZLE_CMS_URL=http://localhost:4000
RAZZLE_CMS_NODE_URL=http://localhost:4000
```

## Code standards

* [Semantic commits](https://seesparkbox.com/foundry/semantic_commit_messages) (enforced by commitlint when commiting)
* [Prettier](https://github.com/prettier/prettier) (automatically on all .js-files when commiting)

## Available commands

| `npm run <script>` | Description                                   |
| ------------------ | --------------------------------------------- |
| `start`            | Serves the app at `localhost:3000`            |
| `build`            | Builds a production bundle of the app         |
| `test`             | Run Jest in watch mode                        |
| `coverage`         | Run Jest and generate coverage                |
| `lint:watch`       | Lint `.js` files and start in watch mode      |
| `flow:watch`       | Run Flow in watch mode                        |
| `schema`           | Generate a schema JSON based on GraphQL types |
| `types`            | Generated Flow typings from GraphQL schema    |
| `cypress`          | Start Cypress                                 |

# Iteam.se

The iteam.se website using content served from [Contentful](http://contentful.com/) 🎉

## Overview

The repositories are split up in separate folders in `packages/`.

A [Now-preview](now.json) is set up for each commit in pull requests, they'll have the following format: `COMMIT_HASH.iteam.now.sh`, please make sure that when you're done with a pull request and would like to have it reviewed that you include this link for easier reviewing.

When a pull-request gets merged to master [Travis](.travis.yaml) will automatically build and push the new images to `Iteam1337`'s docker-repo and will automatically get deployed.

## Code standards

- [Semantic commits](https://seesparkbox.com/foundry/semantic_commit_messages)

## Available commands

| `npm run <script>` | Description                              |
| ------------------ | ---------------------------------------- |
| `api`              | Serves the api at `localhost:3000`       |
| `web`              | Servers the client at specified port     |
| `build:web`        | Builds a production bundle of the client |
| `test`             | Runs the tests in all packages           |

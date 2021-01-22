# Github Enterprise Explorer

## Getting started

Use the steps below to get the project running locally:

- `git clone git@gitlab.com:tall-nerds/github-enterprise-explorer.git`
- `npm i`
- `docker-compose up`
- `npx knex migrate:latest`
- `npx knex seed:run`
- `npm run dev`
- Navigate to http://localhost:3000

## Deployment

We use the [AWS Copilot CLI](https://aws.github.io/copilot-cli/) to coordinate our aws infra and deployment pipelines.

### Installing Copilot

Follow instructions [here](https://aws.github.io/copilot-cli/docs/getting-started/install/).

### Automatic Deployment

Every commit to `main` will automatically go through the pipeline.

### Manual Deployment

To manually deploy to an environment:

- `copilot deploy` (make sure to use `aws-okta` if necessary)

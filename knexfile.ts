import dotenv from 'dotenv';

import * as path from 'path';
import { Config } from 'knex';
import { knexSnakeCaseMappers } from 'objection';

dotenv.config();

const isTest = process.env.NODE_ENV === `test`;

export default {
  client: `pg`,
  connection: {
    host: process.env.DB_HOST || `localhost`,
    user: process.env.DB_USERNAME || `postgres`,
    password: process.env.DB_PASSWORD || `postgres`,
    database: process.env.DB_DATABASE || `gee`,
  },
  migrations: {
    directory: path.join(__dirname, `./migrations`),
    extension: `ts`,
    schemaName: isTest ? `test` : `public`,
  },
  seeds: {
    directory: `./seeds`,
    extension: `ts`,
    stub: `./seeds/stub/seed.stub`,
  },
  ...knexSnakeCaseMappers(),
} as Config;

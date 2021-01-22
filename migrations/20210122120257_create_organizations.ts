import * as Knex from 'knex';
import { pk, timestamps } from './helpers';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(`organizations`, (table) => {
    pk(knex, table);

    table.string(`name`).notNullable();

    timestamps(table);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(`organizations`);
}

import * as Knex from 'knex';
import { timestamps } from './helpers';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(`repositories`, (table) => {
    table.increments(`id`).primary();

    table.string(`name`).notNullable();
    table.string(`language`).notNullable();

    table.string(`organization_id`).notNullable();

    timestamps(table);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(`repositories`);
}

import * as Knex from 'knex';
import { pk, timestamps } from './helpers';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(`repositories`, (table) => {
    pk(knex, table);

    table.string(`name`).notNullable();
    table.string(`language`).notNullable();

    table
      .uuid(`organization_id`)
      .notNullable()
      .references(`id`)
      .inTable(`organizations`);

    timestamps(table);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(`repositories`);
}

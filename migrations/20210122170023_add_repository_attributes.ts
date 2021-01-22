import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.alterTable(`repositories`, (table) => {
    table.text(`description`);
    table.string(`url`).notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.alterTable(`repositories`, (table) => {
    table.dropColumn(`description`);
    table.dropColumn(`url`);
  });
}

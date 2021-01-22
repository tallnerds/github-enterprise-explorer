import Knex, { CreateTableBuilder } from 'knex';

/**
 * Attach a `UUID` based primary key to the `table`.
 *
 * @param knex
 * @param table
 */
export const pk = (knex: Knex, table: CreateTableBuilder) =>
  table.uuid(`id`).primary().defaultTo(knex.raw(`uuid_generate_v4()`));

/**
 * Attach timestamps to `table`.
 *
 * @param table
 */
export const timestamps = (table: CreateTableBuilder) => {
  table.timestamp(`created_at`).notNullable();
  table.timestamp(`updated_at`).notNullable();

  return table;
};

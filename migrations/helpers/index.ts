import { CreateTableBuilder, Table } from 'knex';

export const timestamps = (table: CreateTableBuilder) => {
  table.timestamp(`created_at`).notNullable();
  table.timestamp(`updated_at`).notNullable();

  return table;
};

import * as Knex from 'knex';
import faker from 'faker';
import { Organization } from '../src/models';
import { timestamps } from './helpers';

export async function seed(knex: Knex): Promise<any> {
  return Organization.query(knex).insert(
    Array.from({ length: 4 }, () => ({
      name: faker.company.companyName(),

      ...timestamps(),
    })),
  );
}

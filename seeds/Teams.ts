import * as Knex from 'knex';
import faker from 'faker';
import { Organization, Team } from '../src/models';
import { timestamps } from './helpers';

export async function seed(knex: Knex): Promise<any> {
  const orgs = await Organization.query();

  return Team.query(knex).insert(
    Array.from({ length: 20 }, () => ({
      // Attach to random org
      organizationId: faker.random.arrayElement(orgs).id,

      name: faker.commerce.department(),

      ...timestamps(),
    })),
  );
}

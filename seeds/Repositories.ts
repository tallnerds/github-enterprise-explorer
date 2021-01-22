import * as Knex from 'knex';
import faker from 'faker';
import { Repository } from '../src/models';
import { timestamps } from './helpers';

export async function seed(knex: Knex): Promise<any> {
  return Repository.query(knex).insert(
    Array.from({ length: 50 }, () => ({
      // TODO: Wire to association to organization
      organization_id: faker.random.number(),

      name: `${faker.hacker.verb()}-${faker.vehicle.manufacturer()}`,
      language: faker.random.arrayElement([
        `typescript`,
        `javascript`,
        `java`,
        `php`,
        `elixir`,
        `go`,
      ]),
      ...timestamps(),
    })),
  );
}

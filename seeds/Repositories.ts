import * as Knex from 'knex';
import faker from 'faker';
import { Organization, Repository } from '../src/models';
import { timestamps } from './helpers';

export async function seed(knex: Knex): Promise<any> {
  const orgs = await Organization.query();

  return Repository.query(knex).insert(
    Array.from({ length: 50 }, () => ({
      // Attach to random org
      organizationId: faker.random.arrayElement(orgs).id,

      name: `${faker.hacker.verb()}-${faker.vehicle.manufacturer()}`,
      language: faker.random.arrayElement([
        `typescript`,
        `javascript`,
        `java`,
        `php`,
        `elixir`,
        `go`,
      ]),

      url: faker.internet.url(),
      description: faker.lorem.paragraph(),

      ...timestamps(),
    })),
  );
}

import Knex from 'knex';
import { Model } from 'objection';
import knexConfig from '../../knexfile';

import Organization from './Organization';
import Repository from './Repository';
import Team from './Team';

// Setup knex connection
const knex = Knex(knexConfig);

// Boot objection
Model.knex(knex);

export { Organization, Repository, Team };

import Knex from 'knex';
import { Model } from 'objection';
import Repository from './Repository';
import knexConfig from '../../knexfile';

// Setup knex connection
const knex = Knex(knexConfig);

// Boot objection
Model.knex(knex);

export { Repository };

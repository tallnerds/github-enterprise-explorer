import { Model } from 'objection';
import { Repository, Team } from '.';

export default class Organization extends Model {
  static tableName = `organizations`;

  id!: string;

  name!: string;

  // Optional JSON schema. This is not the database schema! Nothing is generated
  // based on this. This is only used for validation. Whenever a model instance
  // is created it is checked against this schema. http://json-schema.org/.
  static jsonSchema = {
    type: `object`,
    required: [`name`],

    properties: {
      id: { type: `string` },
      name: { type: `string`, minLength: 1, maxLength: 255 },
    },
  };

  static get relationMappings() {
    return {
      repositories: {
        relation: Model.HasManyRelation,
        modelClass: Repository,
        join: {
          from: `organizations.id`,
          to: `repositories.organizationId`,
        },
      },

      teams: {
        relation: Model.HasManyRelation,
        modelClass: Team,
        join: {
          from: `organizations.id`,
          to: `teams.organizationId`,
        },
      },
    };
  }
}

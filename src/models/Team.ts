import { Model } from 'objection';
import Organization from './Organization';

export default class Team extends Model {
  static tableName = `teams`;

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
      organization: {
        relation: Model.BelongsToOneRelation,
        modelClass: Organization,
        join: {
          from: `teams.organizationId`,
          to: `organizations.id`,
        },
      },
    };
  }
}

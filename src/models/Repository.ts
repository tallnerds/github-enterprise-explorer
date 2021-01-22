import { Model } from 'objection';
import Organization from './Organization';

export default class Repository extends Model {
  static tableName = `repositories`;

  id!: string;

  name!: string;

  language!: string;

  url!: string;

  description: string;

  // Optional JSON schema. This is not the database schema! Nothing is generated
  // based on this. This is only used for validation. Whenever a model instance
  // is created it is checked against this schema. http://json-schema.org/.
  static jsonSchema = {
    type: `object`,
    required: [`name`, `language`],

    properties: {
      id: { type: `string` },
      name: { type: `string`, minLength: 1, maxLength: 255 },
      language: { type: `string`, minLength: 1, maxLength: 255 },
    },
  };

  static get relationMappings() {
    return {
      organization: {
        relation: Model.BelongsToOneRelation,
        modelClass: Organization,
        join: {
          from: `repositories.organizationId`,
          to: `organizations.id`,
        },
      },
    };
  }
}

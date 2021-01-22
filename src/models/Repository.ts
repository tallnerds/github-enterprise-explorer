import { Model } from 'objection';

export default class Animal extends Model {
  static tableName = `repositories`;

  id!: number;

  name!: string;

  language!: string;

  // Optional JSON schema. This is not the database schema! Nothing is generated
  // based on this. This is only used for validation. Whenever a model instance
  // is created it is checked against this schema. http://json-schema.org/.
  static jsonSchema = {
    type: `object`,
    required: [`name`, `language`],

    properties: {
      id: { type: `integer` },
      name: { type: `string`, minLength: 1, maxLength: 255 },
      language: { type: `string`, minLength: 1, maxLength: 255 },
    },
  };
}

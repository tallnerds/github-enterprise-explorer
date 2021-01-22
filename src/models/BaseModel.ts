import { Model } from 'objection';

export default class BaseModel extends Model {
  id!: number;

  created_at: Date;

  updated_at: Date;

  $beforeInsert() {
    this.created_at = new Date();
  }

  $beforeUpdate() {
    this.updated_at = new Date();
  }
}

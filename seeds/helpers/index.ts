import { date } from 'faker';

export const timestamps = () => ({
  created_at: date.past(),
  updated_at: date.recent(),
});

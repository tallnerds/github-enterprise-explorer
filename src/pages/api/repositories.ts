import { NextApiRequest, NextApiResponse } from 'next';

import { Repository } from '../../models';

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const repos = await Repository.query();

  res.json(repos);
};

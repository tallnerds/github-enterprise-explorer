import { NextApiRequest, NextApiResponse } from 'next';

import { Repository } from '../../models';

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;

  const repos = await Repository.query();

  console.log(repos);

  res.json({ name: `John Doe` });
};

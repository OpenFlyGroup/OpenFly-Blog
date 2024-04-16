import Cors from 'cors';
import type { NextApiRequest, NextApiResponse } from 'next';

// Initialize the CORS middleware
const cors = Cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
});

export default function withCors(handler: any) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    await cors(req, res);
    return handler(req, res);
  };
}

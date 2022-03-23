import type { NextApiRequest, NextApiResponse } from "next";

import auth0 from "../../lib/auth0";

export default async function callback(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await auth0.handleCallback(req, res, {
      redirectUri: process.env.DOMAIN,
    });
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      res.status(500).end(error.message);
    }
  }
}

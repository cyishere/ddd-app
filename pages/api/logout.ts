import type { NextApiRequest, NextApiResponse } from "next";

import auth0 from "../../lib/auth0";

export default async function logout(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await auth0.handleLogout(req, res, { returnTo: process.env.DOMAIN });
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      res.status(500).end(error.message);
    }
  }
}

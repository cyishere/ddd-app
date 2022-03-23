import type { NextApiRequest, NextApiResponse } from "next";

import auth0 from "../../lib/auth0";

export default async function session(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { accessToken } = await auth0.getAccessToken(req, res, {});
    res.status(200).json({ accessToken });
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      res.status(500).json({
        error: error.message,
      });
    }
  }
}

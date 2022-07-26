import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import {
  createSession,
  createUser,
  getUserByUsername,
} from '../../util/databaseHa';
import crypto from 'node:crypto';
import { createSerializedRegisterSessionTokenCookie } from '../../util/cookies';

export type RegisterResponseBody =
  | {
      errors: {
        message: string;
      }[];
    }
  | { user: { id: number } };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<RegisterResponseBody>,
) {
  if (req.method === 'POST') {
    if (
      typeof req.body.username !== 'string' ||
      typeof req.body.username !== 'string' ||
      !req.body.username ||
      !req.body.password
    ) {
      res
        .status(400)
        .json({ errors: [{ message: 'username or password not provided' }] });
      return;
    }

    if (await getUserByUsername(req.body.username)) {
      res.status(401).json({ errors: [{ message: 'username already taken' }] });
      return;
    }

    const user = req.body;
    console.log(user);

    const passwordHash = await bcrypt.hash(req.body.password, 12);

    // console.log('hash', passwordHash);
    const newUser = await createUser(req.body.username, passwordHash);

    const token = crypto.randomBytes(80).toString('base64');

    const session = await createSession(token, newUser.id);

    const serializedCookie = await createSerializedRegisterSessionTokenCookie(
      session.token,
    );

    res
      .status(200)
      // Tells the browser to create the cookie for us
      .setHeader('set-Cookie', serializedCookie)
      .json({ user: { id: newUser.id } });
    return;
  } else {
    res.status(405).json({ errors: [{ message: 'method not allowed' }] });
  }
}

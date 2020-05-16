import { verify } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

import config from '../config/auth';

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
  email: string;
}

export default (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new Error('JWT token is missing.');
  }

  try {
    const [, token] = authHeader.split(' ');

    const decoded = verify(token, config.jwt.secret);
    const { sub, email } = decoded as ITokenPayload;

    req.user = {
      id: sub,
      email,
    };

    return next();
  } catch {
    throw new Error('Invalid JWT token');
  }
};

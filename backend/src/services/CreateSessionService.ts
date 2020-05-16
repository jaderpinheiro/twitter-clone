import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import jwt from 'jsonwebtoken';

import config from '../config/auth';
import User from '../models/User';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: User;
  token: string;
}

async function execute({ email, password }: IRequest): Promise<IResponse> {
  if (!email) {
    throw new Error('Username or email are a required field.');
  }

  const userRepository = getRepository(User);

  const user = await userRepository.findOne({
    where: [{ email }],
  });

  if (!user) {
    throw new Error('Invalid credentials.');
  }

  const passwordMatch = await compare(password, user.password);

  if (!passwordMatch) {
    throw new Error('Invalid credentials.');
  }

  delete user.password;

  const { secret, expiresIn } = config.jwt;

  const token = jwt.sign({ email: user.email }, secret, {
    subject: user.id,
    expiresIn,
  });

  return { user, token };
}

export default {
  execute,
};

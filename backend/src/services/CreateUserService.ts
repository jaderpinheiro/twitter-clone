import { getRepository } from 'typeorm';
import { hash, genSalt } from 'bcryptjs';

import User from '../models/User';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

async function execute({ email, password }: IRequest): Promise<User> {
  const userRepository = getRepository(User);

  const foundUser = await userRepository.findOne({
    where: [{ email, password }],
  });

  if (foundUser) {
    throw new Error('Credentials already in use.');
  }

  const salt = await genSalt(10);
  const hashedPassword = await hash(password, salt);

  const user = userRepository.create({
    email,
    password: hashedPassword,
  });

  await userRepository.save(user);

  delete user.password;

  return user;
}

export default { execute };

import { getRepository } from 'typeorm';

import Users from '../models/User';

interface IRequest {
  avatar_id: string;
  avatar: string;
}

async function execute({ avatar_id, avatar }: IRequest): Promise<Users> {
  const tweetRepository = getRepository(Users);

  const file = tweetRepository.create({
    avatar_id,
    avatar,
  });

  await tweetRepository.save(file);

  return file;
}

export default {
  execute,
};

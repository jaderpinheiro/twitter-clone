import { getRepository } from 'typeorm';

import Tweet from '../models/Tweet';

interface IRequest {
  ownerId: string;
  content: string;
}

async function execute({ ownerId, content }: IRequest): Promise<Tweet> {
  const tweetRepository = getRepository(Tweet);

  const tweet = tweetRepository.create({
    ownerId,
    content,
  });

  await tweetRepository.save(tweet);

  return tweet;
}

export default {
  execute,
};

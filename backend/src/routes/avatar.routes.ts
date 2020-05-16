import { Router } from 'express';

import CreateAvatarService from '../services/CreateAvatarService';

const router = Router();

router.post('/', async (req, res) => {
  const { avatar_id, avatar } = req.body;

  const file = await CreateAvatarService.execute({
    avatar_id,
    avatar,
  });

  res.status(201).send({ data: file });
});

export default router;

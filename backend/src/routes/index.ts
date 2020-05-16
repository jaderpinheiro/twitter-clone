import { Router } from 'express';

import TweetRoutes from './tweets.routes';
import UsersRoutes from './users.routes';
import SessionsRoutes from './sessions.routes';
import UserAvatar from './avatar.routes';

import { ErrorHandler } from '../middlewares';

const router = Router();
router.use('/tweets', TweetRoutes);
router.use('/users', UsersRoutes);
router.use('/sessions', SessionsRoutes);
router.use('/useravatar', UserAvatar);

router.use(ErrorHandler);

export default router;

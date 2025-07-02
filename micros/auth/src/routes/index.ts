import { Router } from 'express';
import authRouter from './auth.route';

const indexAuthRouter: Router = Router();

indexAuthRouter.use('/auth', authRouter);

export default indexAuthRouter;

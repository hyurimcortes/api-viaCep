
import { Router } from 'express';

import { addressRoutes } from './address.routes';

import { appRoutes } from './app.routes';


const router = Router();

router.use("/", appRoutes);

router.use("/address", addressRoutes);

export { router }
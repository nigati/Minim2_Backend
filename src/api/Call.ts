import callController from '../controller/callController';
import { Router } from 'express';
import { verifyTokenAdmin } from '../middlewares/authJWT';
import { verifyToken } from '../middlewares/authJWT';
import { verifyID } from '../middlewares/authJWT';


const router = Router();

router.get('/channel',[verifyID], callController.getToken);

export default router;
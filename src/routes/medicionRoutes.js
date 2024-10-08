import { Router } from 'express';
import { getMediciones, postMedicion, getUltimaMedicion } from '../controllers/medicionController.js';

const router = Router();

router.get('/', getMediciones);
router.post('/', postMedicion);
router.get('/ultima', getUltimaMedicion);

export default router;
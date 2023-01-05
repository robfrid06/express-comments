import { Router } from 'express'
import * as frustrationsCtrl from '../controllers/frustrations.js'

const router = Router();

/* GET users listing. */
router.get('/', frustrationsCtrl.index);

export {
  router
}

import { Router } from 'express'
import * as frustrationsCtrl from '../controllers/frustrations.js'

const router = Router();

// GET /frustrations
router.get('/', frustrationsCtrl.index);
router.get('/new', frustrationsCtrl.new);
router.get('/:id', frustrationsCtrl.show);

// POST /frustrations
router.post('/', frustrationsCtrl.create);

// DELETE /frustrations
router.delete('/:id', frustrationsCtrl.delete)


export {
  router
}

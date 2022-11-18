const { Router } = require('express')
const router = Router()
const {getEncuesta, postEncuesta, deleteEncuesta, putEncuesta, patchEncuesta } = require('../controllers/encuesta')

router.post('/', postEncuesta) 
router.get('/', getEncuesta) 
router.delete('/', deleteEncuesta) 
router.put('/', putEncuesta) 
router.patch('/', patchEncuesta) 
module.exports = router;
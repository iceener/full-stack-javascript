const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/commentsController');
const { catchErrors } = require('../handlers/errorsHandlers');

router.get('/', (req, res) => { res.render('app') });

router.get('/comments', catchErrors(commentsController.index));
router.post('/comments', catchErrors(commentsController.store));

module.exports = router;
const express = require('express');
const router =  express.Router();

const Controller = require('../controller/shortUrlGeneratorController');

router.post('/URL', Controller.generatshortUrlController);
router.get('/:shortUrl', Controller.redirectForShortUrl);
router.get('/URL/analytics/:id',Controller.getTotalNoofVisitors);


module.exports =router;
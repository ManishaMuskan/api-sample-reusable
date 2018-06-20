'use strict';
/**
 * Module dependencies
 */
const router = require('express').Router();
const {privilaged} = require('./../../middleware/privilaged');

// User Routes

router.route('/hello').get(privilaged);


module.exports = router;
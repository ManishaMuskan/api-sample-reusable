'use strict';
/**
 * Module dependencies
 */
const router = require('express').Router();

const adminRoutes = require('./admin/admin.routes');


// mount admin routes at /admin
router.use('/admin', adminRoutes);



module.exports = router;
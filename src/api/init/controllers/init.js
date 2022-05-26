'use strict';

/**
 *  init controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::init.init');

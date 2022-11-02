'use strict';

/**
 * legacy controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::legacy.legacy');

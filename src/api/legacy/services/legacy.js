'use strict';

/**
 * legacy service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::legacy.legacy');

'use strict';

/**
 * legacy router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::legacy.legacy');

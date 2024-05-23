'use strict';

/**
 * cwe service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cwe.cwe');

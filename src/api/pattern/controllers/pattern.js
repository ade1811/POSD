'use strict';

/**
 * pattern controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::pattern.pattern', ({ strapi }) => ({
    async like(ctx){
        return await strapi.service("api::pattern.pattern").like(ctx)
    },
    async dislike(ctx){
        return await strapi.service("api::pattern.pattern").dislike(ctx)
    }
}));

'use strict';

/**
 * pattern controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::pattern.pattern', ({ strapi }) => ({
    async like(ctx){
        try {
            strapi.log.info("Inizio Controller pattern.like")
            const res = await strapi.service("api::pattern.pattern").like(ctx.request.params.id)
            strapi.log.info(res)
            strapi.log.info("Fine Controller pattern.like")
            return "ok"
        } catch (error) {
            return error
        }
    },
    async dislike(ctx){
        try {
            strapi.log.info("Inizio Controller pattern.like")
            const res = await strapi.service("api::pattern.pattern").dislike(ctx.request.params.id)
            strapi.log.info(res)
            strapi.log.info("Fine Controller pattern.like")
            return "ok"
        } catch (error) {
            return error
        }
    }
}));

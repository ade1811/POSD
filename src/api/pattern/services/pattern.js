'use strict';

/**
 * pattern service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pattern.pattern', ({ strapi }) => ({
    async like(ctx){
        const id = ctx.params.id
        const entity = await strapi.entityService.findOne('api::pattern.pattern', id)
        const update = await strapi.entityService.update('api::pattern.pattern', id, 
            {
                data: {
                    feedback: entity.feedback + 1
                }
            }
        )
        return {message: "ok"}
    },

    async dislike(ctx){
        const id = ctx.params.id
        const entity = await strapi.entityService.findOne('api::pattern.pattern', id)
        const update = await strapi.entityService.update('api::pattern.pattern', id, 
            {
                data: {
                    feedback: entity.feedback - 0.5
                }
            }
        )
        return {message: "ok"}
    }
}));

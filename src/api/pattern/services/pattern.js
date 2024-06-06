'use strict';

/**
 * pattern service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pattern.pattern', ({ strapi }) => ({
    async like(id){
        try {
            strapi.log.info("Inizio Service pattern.like")
            let prevEntity = await strapi.entityService.findOne('api::pattern.pattern', id)
            let update = await strapi.entityService.update('api::pattern.pattern', id, 
            {
                data: {
                    feedback: prevEntity.feedback + 1
                }
            }
            )
            strapi.log.info(update)
            strapi.log.info("Fine Service pattern.like")
            return update
        } catch (error) {
            strapi.log.error(error)
            throw error
        }
    },

    async dislike(id){
        try {
            strapi.log.info("Inizio Service pattern.like")
            let prevEntity = await strapi.entityService.findOne('api::pattern.pattern', id)
            let update = await strapi.entityService.update('api::pattern.pattern', id, 
            {
                data: {
                    feedback: prevEntity.feedback - 0.5
                }
            }
            )
            strapi.log.info(update)
            strapi.log.info("Fine Service pattern.like")
            return update
        } catch (error) {
            strapi.log.error(error)
            throw error
        }
    }
}));

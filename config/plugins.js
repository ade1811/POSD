'use strict';

const principi = require("../src/api/principi/controllers/principi");

module.exports = ({ env }) => ({
    'strapi-algolia': {
        enabled: true,
        config: {
          apiKey: env('ALGOLIA_ADMIN_KEY'),
          applicationId: env('ALGOLIA_APP_ID'),
          contentTypes: [
            { 
                name: 'api::pattern.pattern',
                populate: {
                    strategias: {
                        fields: ["nome"]
                    },
                    articolo_gdprs:{
                        fields: ["numArt", "descrizione"]
                    },
                    principis:{
                        fields: ["descrizione"]
                    }
                },
                hideFields: ["createdAt", "updatedAt", "publishedAt", "locale", "feedback"]
            },

          ],
        },
    },
    email:{
        config: {
            provider: 'nodemailer',
            providerOptions: {
                host: "smtp.gmail.com",
                port: 587,
                auth: {
                    type: "OAuth2",
                    user: env("USER_EMAIL"),
                    clientId: env("CLIENT_ID"),
                    clientSecret: env("CLIENT_SECRET"),
                    refreshToken: env("REFRESH_TOKEN"),
                    accessToken: env("ACCESS_TOKEN")
                },
              }
        }
    }

});
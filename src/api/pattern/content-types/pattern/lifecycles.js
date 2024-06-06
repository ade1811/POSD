module.exports = {
    async beforeUpdate(event){
        if (event.params.data.publishedAt != null){
            event.state = "sendNewsLetter"
        }
    },
    async afterUpdate(event) {    // Collegato al pulsante "Salva" nel pannello di amministrazione
        const {result} = event

        if(event.state === "sendNewsLetter"){
            if(true){
                strapi.log.info("Invio mail")
                try {
                    // Ottenere tutti gli utenti
                    const users = await strapi.db.query('api::mailing-list.mailing-list').findMany()

                    // Iterare su ogni utente e inviare l'email
                    for (const user of users) {
                        try {
                            await strapi.plugins['email'].services.email.send({
                                to: user.email,
                                //from: 'no-reply@strapi.io', // es. verifica del mittente singolo in SendGrid
                                replyTo: 'no-reply@strapi.io',
                                subject: 'Modificato pattern PKB',
                                text: `Ciao ${user.nome},\n Abbiamo aggiornato la PKB con un nuovo pattern o con la modifica di uno esistente`, 
                                html: `<p>Ciao ${user.nome},</p><p> Abbiamo aggiornato la PKB con un nuovo pattern o con la modifica di uno esistente: ${result.nome}`, 
                            });
                        } catch (error) {
                            strapi.log.error("Email non mandata")
                        }
                        
                    }

                    console.log('Email inviata a tutti gli utenti con successo');
                } catch(err) {
                    console.log(err);
                }
            }   
            
        }
    }
}

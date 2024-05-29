module.exports = {
    routes: [
        {
            method: 'PUT',
            path: '/patterns/:id/like',
            handler: 'pattern.like'
        }, 
        {
            method: 'PUT',
            path: '/patterns/:id/dislike',
            handler: 'pattern.dislike'
        }, 
    ]
}
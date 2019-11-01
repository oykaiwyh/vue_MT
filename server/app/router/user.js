module.exports = app =>{
    const { router , controller } = app
    router.get('/signin',controller.user.user.test)
}
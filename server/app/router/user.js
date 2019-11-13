module.exports = app =>{
    const { router , controller } = app
    router.post('/user/signup',controller.user.user.signup)
    router.post('/user/signin',controller.user.user.signin)
    router.post('/user/verify',controller.user.user.verify)
    router.post('/user/exit',controller.user.user.exit)
    router.post('/user/getusername',controller.user.user.getusername)

}
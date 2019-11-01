module.exports = app =>{
    const { router,controller } = app
    router.get('/gettest', controller.home.gettest);
    router.get('/get', controller.user.user.test);
}
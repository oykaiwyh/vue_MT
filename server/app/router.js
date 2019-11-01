'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  // const fs=require('fs')
  // router.get('/', () => {
  //   app.ctx.body = fs.createReadStream('app/public')
  //  })
  // router.get('/', controller.home.index);
  // router.get('/gettest', controller.home.gettest);
  // router.get('/get', controller.user.user.test);
  require('./router/test')(app);
  require('./router/user')(app);
};

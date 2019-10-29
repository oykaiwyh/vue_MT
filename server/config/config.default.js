/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1572327040791_9523';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    //配置四位随机验证码的生成code
    code:function(){
      return Math.random().toString(16).splice(2,4)   
    },
    //配置验证码有效期为1分钟：expire
    expire:function(){
      return new Date().getTime() + 1*60*1000;
    }



  };
  //使用mongoose配置mongodb连接
  config.mongoose={
    client:{
      url:"mongodb://127.0.0.1/project_meituan",
      options:{
        useNewUrlParser:true
      }
    }
  };
  //配置redis连接
  config.redis = {
    client: {
      port: 6379,          // Redis port
      host: '127.0.0.1',   // Redis host
      password: 'auth',
      db: 0,
    },
  }
  //配置eamil
  config.eamil = {
    client :{
      host : "smtp.qq.com",
      secureConnection: true,
      port : 465,
      auth : {
        user : '1641250803@qq.com',
        pass : 'mkfstpenwaibfbfe'
      }
    }
  }

  return {
    ...config,
    ...userConfig,
  };
};

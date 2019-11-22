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
    adminemail:'1641250803@qq.com',
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
  //配置session配置
  exports.session = {
    key: 'mt',
    maxAge: 24 * 3600 * 1000, //cookie的有效期 1 天
    prefix:'mt:uid',  //存储前缀
    httpOnly: true,  //通过程序(JS脚本、Applet等)将无法读取到Cookie信息，这样能有效的防止XSS攻击。
    encrypt: true,  //加密
    renew: true  //每次访问页面都会给session会话延长时间
  };

//   config.cluster = {
//     listen: {
//       path: '',
//       port: 7090,
//       hostname: '192.168.10.160',
//     }
// };
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
  //配置axios的http请求
  config.http ={
    header:{
      common:{
        'Content-Type':'application/json;charset=UTF-8'
      }
    },
    timeout:10000
  }

  return {
    ...config,
    ...userConfig,
  };
};

'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  email : {
    enable: true,
    package: 'egg-email',
  },
  mongoose:{
    enable:true,
    package:'egg-mongoose'
  },
  redis:{
    enable:true,
    package: "egg-redis"
  },
  passport:{
    enable:true,
    package: "egg-passport"
  },
  passportLocal:{
    enable:true,
    package: "egg-passport-local"
  },
  http:{
    enable:true,
    package:"egg-axios"
  }
};

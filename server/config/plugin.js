'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
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
  }
};

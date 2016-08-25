var winston = require('winston');

var logger = new (winston.Logger)({
  transports: [
    new (require('winston-daily-rotate-file'))({ // normal size rotation
      level: 'debug',
      handleExceptions: true,
      json: false,
      maxsize: 5242880, //5MB
      maxFiles: 20,
      colorize: false,
      filename: './api.log'
    }),
    new winston.transports.Console({
      level: 'debug',
      handleExceptions: true,
      timestamp: true,
      json: false,
      colorize: true
    })
  ]
});

module.exports = logger;
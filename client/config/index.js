const defaultConfig = require('./config.default')

let envConfig

switch (process.env.NODE_ENV) {
  case 'production':
    envConfig = require('./config.prod'); break;
  default:
    envConfig = require('./config.dev');
}

/**
 * Merge default config and env specific config
 *
 * @type {*}
 */
module.exports = Object.assign({}, defaultConfig, envConfig)

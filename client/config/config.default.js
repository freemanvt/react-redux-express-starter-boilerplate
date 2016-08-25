/**
 * Default configuration, place all you default configuration here and it will be available in other scripts.
 *
 * e.g.
 *
 * import config from '../config'
 *
 * var endpoint = config.API_URL
 *
 * @type {boolean|string|string}
 */

const API_HOST = (typeof location !== 'undefined' && '//' + location.host) || 'http://localhost:6628'

module.exports = {
  API_HOST,
  API_URL: API_HOST + '/api'
};

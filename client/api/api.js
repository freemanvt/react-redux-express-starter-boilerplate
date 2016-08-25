import fetch from 'isomorphic-fetch';
import config from '../config'

/**
 * perform an api request to the backend server, this is using fetch to perform the request call
 *
 * @param types
 *    The start, success and failure types to return to reducer
 * @param method
 *    Http method, default is 'get'
 * @param endpoint
 *    Endpoint to invoke, this is appended to API_URL
 * @returns {{types: *, promise: promise}}
 */
export function request(types, method = 'get', endpoint) {
  return {
    types: types,
    promise: () => {
      return new Promise((resolve, reject) => {
        const _options = {
          method: method,
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        };
        return fetch(config.API_URL + endpoint, _options)
          .then(response =>
            response.json().then(json => ({ json, response }))
          ).then(({ json, response }) => {
            if (!response.ok) {
              return reject(json)
            }
            return resolve(json)
          });
      })
    }
  }
}

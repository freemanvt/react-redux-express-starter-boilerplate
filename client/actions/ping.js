/**
 * example of an async action creator calling a backend service
 */
import { request }  from './../api/api'

// ======================================================================================
/**
 * Ping API action
 */
export const types =  ['PING_REQUEST', 'PING_SUCCESS', 'PING_FAILURE'];

export function ping() {
  return request(types, undefined, '/ping')
}

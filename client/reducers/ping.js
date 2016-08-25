export default {
  ping: (state = {}, action) => {

    switch (action.type) {
      case 'PING_REQUEST':
        return {
          ...state
        }
      case 'PING_SUCCESS':
        return {
          ...state,
          status: action.result.status
        }
      case 'PING_FAILURE':
        // we could add an error message here, to be printed somewhere in our application
        console.log('PING_FAILURE')
        return {
          ...state
        }
      default:
        return state
    }
  }
}
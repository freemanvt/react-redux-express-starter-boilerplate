/**
 * Promise middleware for async call, This function is taken from the awesome Redux tutorial by happypoulp,
 *
 * https://github.com/happypoulp/redux-tutorial
 *
 * @returns {Function}
 */
export default function promiseMiddleware() {
  return (next) => (action) => {
    const { promise, types, ...rest } = action

    if (!promise) {
      return next(action)
    }

    const [REQUEST, SUCCESS, FAILURE] = types // maps the types passed in with REQUEST, SUCCESS and FAILURE

    console.log('REQUEST', REQUEST);

    next({...rest, type: REQUEST})

    return promise().then(
      (result) => {
        next({...rest, result, type: SUCCESS})
      },
      (error) => {
        next({...rest, error, type: FAILURE})
      }
    )
  }
}
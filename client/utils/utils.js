/**
 * require multiple modules using Webpack's context API
 */
export const requireAll = (requireContext) => {
  return requireContext.keys().map(requireContext);
};



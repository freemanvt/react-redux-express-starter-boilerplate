import { requireAll } from '../utils/utils';

/**
 * Import styles into the app
 */
module.exports = () => {
  // require all css and scss files in the current directory
  requireAll(require.context('.', true, /\.s?css$/));
};

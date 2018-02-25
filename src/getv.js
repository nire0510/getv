/**
 * @property {object} object - The object to query
 * @property {string} path - The path of the property to get
 * @property {object} fallback - The default value to return if no value found in path
 * @returns {*} Returns the resolved value (undefined / fallback value / value found).
 */
function getv(object, path, fallback) {
  const dot = path.indexOf('.');

  if (object === undefined) {
    return fallback || undefined;
  }

  if (dot === -1) {
    if (path.length && path in object) {
      return object[path];
    }
    return undefined;
  }

  return getv(object[path.substr(0, dot)], path.substr(dot + 1), fallback);
}

module.exports = getv;

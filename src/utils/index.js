//  this is a sample util function

/**
 * @param array an array of objects
 * @param key the key of the object to pluck
 * @returns the array of values for the key in each object
 */

export function pluck(array, key) {
  return array.map((element) => element[key]);
}

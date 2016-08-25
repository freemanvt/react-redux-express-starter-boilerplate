/**
 * example of a normal sync action creator
 *
 * @param item
 * @returns {{type: string, item: *}}
 */
export function addItem(item) {
  return {
    type: "ADD_ITEM",
    item: item
  }
}

export function isTouchDevice() {
  let win

  try {
    win = window || {}
  } catch (err) {
    win = {}
  }

  return !(win.USER_CAN_HOVER || false)
}

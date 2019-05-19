export function isTouchDevice() {
  let win
  let doc = false

  try {
    win = window || {}
    doc = document || false
  } catch (err) {
    win = {}
  }

  return !(
    win.USER_CAN_HOVER ||
    (doc && doc.body.classList.contains('user-can-hover')) ||
    false
  )
}

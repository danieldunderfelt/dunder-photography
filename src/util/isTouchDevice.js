import { invoke, get } from 'lodash'

export function isTouchDevice() {
  let win
  let doc

  try {
    win = window || {}
    doc = document || {}
  } catch (err) {
    win = {}
    doc = {}
  }

  const prefixes = ' -webkit- -moz- -o- -ms- '.split(' ')
  const mq = function(query) {
    return get(invoke(win, 'matchMedia', query), 'matches')
  }

  if (
    'ontouchstart' in win ||
    (win.DocumentTouch && doc instanceof win.DocumentTouch)
  ) {
    return true
  }

  // include the 'heartz' as a way to have a non matching MQ to help terminate the join
  // https://git.io/vznFH
  var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('')
  return mq(query)
}

'use strict'

const util = require('util')
const fs = require('fs')
const json = require('./sessions/2_MX40NjE4NjE2Mn5-MTU4NDM2MTcxMjc5M35JMVpPRDR5eFBwdCtaYWVjRi84V2xsL0h-fg/events.json')
const timestampToHumanReadable = timestamp => {
  const date = new Date(timestamp)
  const _date = date.toISOString().split('T')[0]
  const _time = date.toISOString().split('T')[1].split('.')[0]

  return _date + ' ' + _time
}

const events = json.events.filter(e => {
  return e.streamId === 'c459e893-2db7-49d8-821c-b26808559438' && e.eventName !== 'dimensionChange'
})
.map(e => {
  return {
    eventName: e.eventName,
    streamId: e.streamId,
    date: timestampToHumanReadable(e.timestamp),
    user: e.processed.username,
    description: typeof e.processed.description === 'string' ? e.processed.description : e.processed.description.text
  }
})
.filter(e => {
  return e.date.includes('2020-05-27 19:55') ||
    e.date.includes('2020-05-27 19:54') ||
    e.date.includes('2020-05-27 19:53')
})

console.log(util.inspect(events, false, null, true))

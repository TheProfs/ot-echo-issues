'use strict'

const util = require('util')
const fs = require('fs')
const json = require('./sessions/1_MX40NjE4NjE2Mn5-MTU4NDM2MTgzNDk3OH5ScWZiTS9kV1ZtbGxIejk5ZkZyMUZ4Qy9-fg/events.json')
const events = json.events
const timestampToHumanReadable = timestamp => {
  const date = new Date(timestamp)
  const _date = date.toISOString().split('T')[0]
  const _time = date.toISOString().split('T')[1].split('.')[0]

  return _date + ' ' + _time
}

const publishers = events.filter(e => {
  return e.eventName === 'server_publisherCreated'
})
.map(e => {
  return {
    user: e.processed.username,
    streamId: e.streamId,
    timestamp: e.timestamp,
    date: timestampToHumanReadable(e.timestamp),
    subscribers: []
  }
})
.sort((a, b) => {
  return a.timestamp - b.timestamp
})

events.filter(e => e.eventName === 'subscribe_success')
  .forEach(e => {
    const publisher = publishers.find(p => {
      return p.streamId === e.streamId
    })

    publisher.subscribers.push({
      user: e.processed.username,
      date: timestampToHumanReadable(e.timestamp)
    })
  })

events.filter(e => e.eventName === 'server_publisherDestroyed')
  .forEach(e => {
    const publisher = publishers.find(p => {
      return p.streamId === e.streamId
    })

    publisher.destroyed = timestampToHumanReadable(e.timestamp)
  })

const split = publishers.reduce((acc, p) => {
  const date = timestampToHumanReadable(p.timestamp)

  delete p.timestamp

  if (acc[date]) {
    acc[date].push(p)
  } else {
    acc[date] = [p]
  }

  return acc
}, {})


console.log(util.inspect(split, false, null, true))

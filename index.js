'use strict'

const util = require('util')
const fs = require('fs')
const json = require('./events/sample.json')

const events = json.events

const publishers = events.filter(e => {
  return e.eventName === 'server_publisherCreated'
})
.map(e => {
  return {
    user: e.processed.username,
    streamId: e.streamId,
    timestamp: new Date(e.timestamp),
    subscribers: []
  }
})
.sort((a, b) => {
  return a.timestamp - b.timestamp
})


const subscribeEvents = events.filter(e => e.eventName === 'subscribe_success')
  .forEach(e => {
    const publisher = publishers.find(p => {
      return p.streamId === e.streamId
    })

    publisher.subscribers.push({
      user: e.processed.username,
      timestamp: new Date(e.timestamp)
    })
  })

const split = publishers.reduce((acc, p) => {
  const date = p.timestamp.toISOString().split('T')[0]

  if (acc[date]) {
    acc[date].push(p)
  } else {
    acc[date] = [p]
  }

  return acc
}, {})


console.log(util.inspect(split, false, null, true))

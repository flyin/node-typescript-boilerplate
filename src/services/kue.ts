import * as kue from 'kue'
import { settings } from './settings'

const queue: kue.Queue = kue.createQueue({
  redis: {
    redisHost: settings.redisHost,
    redisPort: settings.redisPort
  }
})

export {queue}

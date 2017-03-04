import * as kue from 'kue'
import { logger } from '../utils/logger'

const concurrency: number = 10

const job = (queue: kue.Queue) => queue.process('process-email', concurrency, (job: kue.Job, done: Function) => {
  logger.info('job received', job.data)

  setTimeout(() => {
    console.log('job done')
    done()
  }, 1000)
})

export { job }

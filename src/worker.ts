import {mongoose, settings, queue} from './services'
import {logger} from './utils/logger'
import {job as emailJob} from './jobs/emails'

mongoose.connection.once('open', () => {
  logger.info(`Connected to: ${settings.mongoURL}`)
  emailJob(queue)
})

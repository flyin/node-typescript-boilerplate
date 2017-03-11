import {mongoose, queue} from './services'
import {logger} from './utils/logger'
import {task as emailTask} from './tasks/emails'
import {settings} from './settings'

mongoose.connection.once('open', () => {
  logger.info(`Connected to: ${settings.mongoURL}`)
  emailTask(queue)
})

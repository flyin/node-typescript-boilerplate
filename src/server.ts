import * as http from 'http'
import {koa, mongoose} from './services'
import {logger} from './utils/logger'
import {settings} from './settings'

const server: http.Server = http.createServer(koa.callback())

mongoose.connection.once('open', () => {
  logger.info(`Connected to: ${settings.mongoURL}`)
  server.listen(settings.apiPort, () => logger.info(`Server is ready at: http://127.0.0.1:${settings.apiPort}`))
})

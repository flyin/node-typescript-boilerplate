import * as winston from 'winston'
import * as moment from 'moment'

export const logger: winston.LoggerInstance = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({
      formatter (options: winston.LoggerOptions): string {
        /* tslint:disable-next-line max-line-length */
        return `${options.timestamp()} ${options.level} [${process.env.APP_ENV || 'UNKNOW ENV'}] ${(options.message ? options.message : '')} ${options.meta && Object.keys(options.meta).length ? `\n\t${JSON.stringify(options.meta)}` : ''}`
      },

      timestamp (): string {
        return moment().format()
      }
    })
  ]
})

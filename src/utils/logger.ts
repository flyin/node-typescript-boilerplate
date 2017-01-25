import * as winston from 'winston';
import * as moment from 'moment';

const logger: winston.LoggerInstance = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({
      formatter(options): string {
        /* tslint:disable-next-line max-line-length */
        return `${options.timestamp()} ${options.level.toUpperCase()} ${(options.message ? options.message : '')} ${options.meta && Object.keys(options.meta).length ? `\n\t${JSON.stringify(options.meta)}` : ''}`;
      },

      timestamp(): string {
        return moment().format();
      }
    })
  ]
});

export { logger };

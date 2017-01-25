import * as kue from 'kue';
import { mongoose, logger } from './utils';
import { queue as emailQueue } from './queue/email';

const queue: kue.Queue = kue.createQueue({
  redis: {
    redisHost: '127.0.0.1',
    redisPort: 6379
  }
});

mongoose.connection.once('open', () => {
  emailQueue(queue);
  logger.info('Worker is running http://127.0.0.1:3333/');
  kue.app.listen(3333);
});

export { kue, queue };

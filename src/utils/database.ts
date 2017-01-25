import { settings } from '../settings';
import { logger } from './logger';
import mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1/typescript_mongoose');

settings.apps.forEach((appName: string) => {
  try {
    require(`../apps/${appName}/models`);
  } catch (err) {
    logger.error(err);
  }
});

export { mongoose };

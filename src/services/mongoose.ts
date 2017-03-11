import mongoose = require('mongoose')
import { settings } from '../settings'

mongoose.Promise = global.Promise
export { mongoose }
mongoose.connect(settings.mongoURL)

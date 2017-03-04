import mongoose = require('mongoose')
import {settings} from './settings'

mongoose.Promise = Promise
mongoose.connect(settings.mongoURL)
export { mongoose }

import * as Koa from 'koa'
import {errorMiddleware} from '../middlewares/errors'

const koa = new Koa()
koa.use(errorMiddleware())

export {koa}

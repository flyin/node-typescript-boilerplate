import * as Koa from 'koa'

export const errorMiddleware = () => async (ctx: Koa.Context, next: Function) => {
  try {
    await next()
  } catch (err) {
    if (err.name === 'ValidationError') {
      return ctx.throw(400, { errors: err.errors, message: err.message, name: err.name })
    }

    ctx.throw(err)
  }
}

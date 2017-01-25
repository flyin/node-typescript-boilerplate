import * as http from 'http';
import * as Koa from 'koa';
import * as koaLogger from 'koa-logger';
import { mongoose, logger } from './utils';

const app: Koa = new Koa();
app.use(koaLogger());

const port: number = process.env.PORT || 8000;
const server: http.Server = http.createServer(app.callback());

mongoose.connection.once('open', () => {
  logger.info(`Server is listening 'http://127.0.0.1:${port}/'`);
  server.listen(port);
});

export { server };

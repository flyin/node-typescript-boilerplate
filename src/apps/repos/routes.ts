import * as Router from 'koa-router';
import * as compose from 'koa-compose';

const router = new Router({prefix: '/repos'});

export default () => compose([router.routes(), router.allowedMethods()]);

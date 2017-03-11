require('dotenv').config()

export const settings = {
  apiPort: process.env.API_PORT || 3000,
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost/beflow_dev',
  redisHost: process.env.REDIS_HOST || '127.0.0.1',
  redisPort: process.env.REDIS_PORT || 6379
}

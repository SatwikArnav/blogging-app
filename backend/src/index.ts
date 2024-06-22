import { decode, sign, verify } from 'hono/jwt'

import { Hono } from 'hono'
import { cors } from 'hono/cors'
//import { PrismaClient } from '@prisma/client/edge'
//import { withAccelerate } from '@prisma/extension-accelerate'
import userRouter from './routes/user'
import blogRouter from './routes/Blog'

const app = new Hono<{
	Bindings: {
		DATABASE_URL: string
    JWT_SECRET:string
	}
  Variables: {
    userId:string
  }
}>();

import { Context, Next } from 'hono'

const rateLimit = (limit: number, window: number) => {
  const ipMap = new Map<string, { count: number; resetTime: number }>()

  return async (c: Context, next: Next) => {
    const ip = c.req.header('x-forwarded-for') || 'unknown'
    const now = Date.now()
    let record = ipMap.get(ip)

    if (!record || now > record.resetTime) {
      record = { count: 0, resetTime: now + window }
      ipMap.set(ip, record)
    }

    if (record.count >= limit) {
      return c.text('Rate limit exceeded', 429)
    }

    record.count++
    return next()
  }
}
app.use('*', rateLimit(20, 60000))
app.use('/*',cors());
app.route('/api/v1/user',userRouter);

app.route('/api/v1/blog',blogRouter);





export default app

import { decode, sign, verify } from 'hono/jwt'

import { Hono } from 'hono'
import { signinInput, signupInput} from '@satwikarnav/common-app'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

const userRouter = new Hono<{
	Bindings: {
		DATABASE_URL: string
    JWT_SECRET:string
	}
}>();
userRouter.post('/', (c) => {
  
    return c.text('Hello Horno!');
  })
  userRouter.post('/signup', async (c)=>{
    try{
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
      const body=await c.req.json();
      const {success}=signupInput.safeParse(body);
            if(!success){
                c.status(400);
            return c.json({ error: "invalid input" });
            }
      const user = await prisma.user.create({
        data:body,
        
      })
      const payload={id:user.id}
      const secret=c.env.JWT_SECRET
      const token = await sign(payload, secret)
      c.status(201);
  return c.json({
    token:"Bearer"+" "+token,
    name:user.name
  });
    }
    catch(e){
      console.error(e);
      c.status(403);
      return c.text("ooops");
    }
  })
  userRouter.post('/signin',async (c)=>{
    try{
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
      const body=await c.req.json();
      const {success}=signinInput.safeParse(body);
            if(!success){
                c.status(400);
            return c.json({ error: "invalid input" });
            }
      const user=await prisma.user.findFirst({
        where:{
          email:body.email
        }
      })
  
      if(!user){
        return c.text('oops');
      }
      const payload={id:user.id}
      const secret=c.env.JWT_SECRET
      const token = await sign(payload, secret)
      //console.log("ji")
  return c.json({
    token:"Bearer"+" "+token,
    name:user.name
  });
    }
    catch(e){
      console.error(e);
      c.status(403);
      return c.text("ooops");
    }
  })

export default userRouter
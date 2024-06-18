import { decode, sign, verify } from 'hono/jwt'

import { Hono } from 'hono'
import {createPostInput, updatePostInput } from "@satwikarnav/common-app"
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

const blogRouter = new Hono<{
	Bindings: {
		DATABASE_URL: string
    JWT_SECRET:string
	},
    Variables:{
        userId: string
    }
}>();
blogRouter.use('/*', async (c, next) => {
	const jwt = c.req.header('Authorization')||"";
	if (!jwt) {
		c.status(401);
		return c.json({ error: "unauthorized" });
	}
	const token = jwt.split(' ')[1];
    try{
	const payload = await verify(token, c.env.JWT_SECRET) ;
	
    if (typeof payload.id=='string'){
	c.set('userId', payload.id);
	await next()
    }
    }
    catch(e){
        c.status(401)
        c.json({message:"not logged in"});
    }
})

blogRouter.post('/',async  (c) =>{
    //{success}=createPostInput.safeParse()
    try{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
        const body=await c.req.json();
        const {success}=createPostInput.safeParse(body);
        if(!success){
            c.status(400);
		return c.json({ error: "invalid input" });
        }
        const userId = c.get('userId');
     const post=await prisma.post.create({
        data: {
			title: body.title,
			content: body.content,
			authorId: userId
		}
     })   
     return c.json({id:post.id});
    }
    catch(e){
        c.status(400)
        return c.json({"message":"could not create"})
    }
})




blogRouter.get('/bulk', async (c) => {
    try{
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate());
           
         const post=await prisma.post.findMany();   
         return c.json(post);
        }
        catch(e){
            c.status(400)
            return c.json({"message":"could not create"})
        }
})

blogRouter.get('/:id',async  (c) => {
    try{
        
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate());
           
         const post=await prisma.post.findFirst({
            where:{
                id:c.req.param("id")
            }
         })   
         return c.json(post);
        }
        catch(e){
            c.status(400)
            return c.json({"message":"could not create"})
        }
})


export default blogRouter;
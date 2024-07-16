import { Hono } from 'hono'
import { decode, sign, verify } from 'hono/jwt'
import {createPostInput, updatePostInput } from "@satwikarnav/common-app"
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

const commentRouter = new Hono<{

	Bindings: {
		DATABASE_URL: string
    JWT_SECRET:string
	},
    Variables:{
        userId: string
    }
}>();

commentRouter.use('/*', async (c, next) => {
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

commentRouter.post('/:postId',async  (c) =>{
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
         const comment=await prisma.comment.create({
            data: {
                
                content: body.content,
                userId: userId,
                postId: c.req.param("postId") || ""
                

                
            },
         })   
         return c.json({id:comment.id});
        }
        catch(e){
            c.status(400)
            return c.json({"message":"could not create"})
        }
    })
    
    

    

export default commentRouter;


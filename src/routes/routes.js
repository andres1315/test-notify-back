import { notificationRoutes } from "./notificationRoutes.js"

export const getRoutes = (app)=>{
  app.get('/',(req,res,next)=>{
    res.status(200).send('<h1>Hello Prosoft</h1>')
  })

  app.use('/api/notifications',notificationRoutes)
}
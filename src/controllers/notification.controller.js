const saveNotification =  async(req,res,next)=>{
  try{
    console.log(req.body)
    const {message} = req.body
    req.app.get('socket').emit('server:new-notification',{message})
    return res.status(200).json({ message , statusCode: 200,  })
  }catch(error){
    next(error);
  }
}

export{
  saveNotification
}
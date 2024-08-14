const db=require('../models/models');
exports.getAllItems=(req,res)=>{
    db.getAllItems((err,callback)=>{
        if(err){
            console.log(err);
            res.status(500).json("ERROR WHILE FETCHING");
            return;
        }
        res.status(200).send(callback);
        console.log("data sent successfully");
      })
}

exports.getItemsById=(req,res)=>{
    const id=req.params.id;
    db.getItemsById(id,(err,callback)=>{
        if(err){
            console.log(err);
            res.status(500).json("ERROR WHILE FETCHING");
            return;
        }
        res.status(200).send(callback);
        console.log("data sent BY ID successfully");
    })
}
exports.createItem=(req,res)=>{
   const body=req.body;
    db.createItem(body,(err,callback)=>{
        if(err)
        {
            console.log(err);
            res.status(500).json("ERROR WHILE CREATING A USER");
            return;
        }
        res.status(200).send("CREATED SUCCESSFULLY");
        console.log("user created successfully");
    })
}
exports.updateItem=(req,res)=>{
    const body=req.body;
    const id=req.params.id;
    db.updateItem(body,id,(err,callback)=>{
        if(err){
            console.log(err);
            res.status(500).json("ERROR WHILE UPDATING A USER");
            return;
        }
        res.status(200).send("UPDATED SUCCESSFULLY");
        console.log("user with id: "+id+"updated successfully")
    })
}
exports.deleteItem=(req,res)=>{
    const id=req.params.id;
    db.deleteItem(id,(err,callback)=>{
        if(err){
            console.log(err);
            res.status(500).json("ERROR WHILE DELETING A USER");
            return;
        }
        res.status(200).send("DELETED SUCCESSFULLY");
        console.log("user with id: "+id+"deleted successfully")
    })
}
exports.createGig=(req,res)=>{
    const body=req.body;
    db.createGig(body,(err,callback)=>{
        if(err)
        {
            console.log(err);
            res.status(500).json("ERROR WHILE CREATING A USER");
            return;
        }
        res.status(200).send("CREATED SUCCESSFULLY");
        console.log("user created successfully");
    })       
}
exports.getGigs=(req,res)=>{
    db.getGigs((err,callback)=>{
        if(err){
            console.log(err);
            res.status(500).json("ERROR WHILE FETCHING");
            return;
        }
        res.status(200).send(callback);
        console.log("data sent successfully");
      })
}

exports.createPosts=(req,res)=>{
    const body=req.body;
    db.createPosts(body,(err,callback)=>{
        if(err)
        {
            console.log(err);
            res.status(500).json("ERROR WHILE CREATING A USER");
            return;
        }
        res.status(200).send("CREATED SUCCESSFULLY");
        console.log("user created successfully");
    })       
}

exports.getPosts=(req,res)=>{
    db.getPosts((err,callback)=>{
        if(err){
            console.log(err);
            res.status(500).json("ERROR WHILE FETCHING");
            return;
        }
        res.status(200).send(callback);
        console.log("data sent successfully");
      })
}
exports.UpdatePosts=(req,res)=>{
    const body=req.body;
    const id=req.params.emai;
    console.log(body+""+id)
    db.UpdatePosts(body,id,(err,callback)=>{
        if(err){
            console.log(err);
            res.status(500).json("ERROR WHILE UPDATING A USER");
            return;
        }
        res.status(200).send("UPDATED SUCCESSFULLY");
        console.log("user with id: "+id+" updated successfully")
    })
}
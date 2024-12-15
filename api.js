const express=require('express');
const dbConnection=require('./mongodb');
const app=express();



// get data

app.get('/',async (req,resp)=>{
    let data=await dbConnection();
    data=await data.find({}).toArray();
    console.warn(data);
    resp.send({name:'Anil'})
})




app.use(express.json());

//post method
app.post('/',async (req,resp)=>{

 //console.log(req.body);
 let data=await dbConnection();
 let result=await data.insertOne(req.body);
 resp.send(result)
})





// put method/ updation of data

app.put("/:name",async (req,resp)=>{
   // console.log(req.body);
   let data=await dbConnection();
   let result=data.updateOne(
    // {name:req.body.name},{$set:req.body}
    {name:req.params.name},{$set:req.body}
)
    resp.send({result:"Updated"})
})



// delete 
const mongodb=require('mongodb');
app.delete("/:id",async (req,resp)=>{
    //console.log(req.params.id);

    let data=await dbConnection();
    const result=await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)});
    resp.send(result);
})

app.listen(5000)
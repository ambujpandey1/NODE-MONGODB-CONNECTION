const dbConnection=require('./mongodb');

const updateData=async ()=>{
  let data= await dbConnection();

  // update single data
//   let result=data.updateOne(
//     {name:'m 40'},{$set: {name:'max pro 5(m 40)',price:123}}
//   );
//   console.warn(data);



// updat multiple data
let result=data.updateMany(
    
        {name:'note 5'},{$set: {name:'max pro 5(m 40)'}}
    
  );
  console.warn(data);

}


updateData();
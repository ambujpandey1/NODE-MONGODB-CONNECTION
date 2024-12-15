const dbConnection=require('./mongodb');

const deleteData=async ()=>{
 let data=await dbConnection();   

 // Single data delete
//  let result=await data.deleteOne(
//    {name:'Genda'}
//  );


// multiple data delete
let result=await data.deleteMany(
    {name:'max pro 5(m 40)'}
  );


 console.warn(result);
 if(result.acknowledged){
    console.log("Data Deleted");
 }

}

deleteData();
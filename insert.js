const dbConnection=require('./mongodb');  // import

const insert =async ()=>{
//    console.log("Insert Function");
   const db=await dbConnection();

   // for inserting one data
//    const result = await db.insertOne(
//     {name:'note 5',brand:'vivo', price:123, catogery:'mobile' }
//    );


// for inserting multiple data
const result = await db.insertMany(
    [
        {name:'hero',brand:'dfgbo', price:123, catogery:'Bycycle' },
        {name:'Byscycle',brand:'oooo', price:123, catogery:'kela' },
        {name:'Genda',brand:'dj', price:123, catogery:'Animal' }
    ]
   );

   if(result.acknowledged){
    console.log("Data inserted");
   }
  
}
insert();
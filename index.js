const {MongoClient, Collection}= require('mongodb');
// const MongoClient=require('mongodb').MongoClient;
const url='mongodb://localhost:27017';

const database='e-comm'
const client=new MongoClient(url);

async function dbConnection(){
    let result = await client.connect();
    db= result.db(database);
    return db.collection('product');
   
}
async function getData(){
    let result = await client.connect();
     let db= result.db(database);
    let collection=db.collection('product');
    let response= await collection.find({name:'m 40'}).toArray();
    console.log(response);
}


or // common function for  all
async function dbConnection(){
    let result = await client.connect();
    db= result.db(database);
    return db.collection('product');
   
}



// for accesing data
dbConnection().then((resp)=>{
    resp.find({name:'m 40'}).toArray().then((data)=>{
        console.warn(data);
        
    })
})
getData();
console.warn(dbConnection());










// Above whole information or following with mopngodb.js file






const dbConnection=require('./mongodb');  // import
const main =async ()=>{
   // console.log("Main function called")

   let data =await dbConnection();
   data=await data.find({}).toArray();
   console.warn(data);
}
main();
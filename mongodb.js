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

module.exports=dbConnection;


// this file is common filde code for connection the database an collection
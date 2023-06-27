require("dotenv").config() ;
const express = require("express") ;
const app = express() ;
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cors = require('cors');
const jwtToken = require('jsonwebtoken') ;
const port = process.env.PORT || 3065 ;
app.use(cors()) ;
app.use(express.json()) ;
app.get("/" , (req , res ) =>{
res.send("Welcome dear user this is home page") ;
})
//verify jwt token 
const verifyJWT = (req , res , next) => {
const getToken = req.headers.authorization ;
if(!getToken){
return res.status(401).send({message:"unauthorize access"}) ;
}
const arrayToken = getToken.split(' ')[1] ;
jwtToken.verify(arrayToken , process.env.SECRET_TOKEN , function (error , decoded) {
if(error){
return res.status(403).send({message:"unauthorize access"})  ;
 }
 req.decoded = decoded ;
 next() ;
})
}
const runServer = async () => {
try { 
const mongodb_username = process.env.MONGODB_USERNAME ;
const mongodb_password = process.env.MONGODB_PASSWORD ;
const uri = `mongodb+srv://${mongodb_username}:${mongodb_password}@cluster0.ph3bv4a.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const servicesCollection = client.db("lotus-pc").collection("services");
const reviewsCollection = client.db("lotus-pc").collection("reviews");
//post service data  
app.post("/services" , async (req , res) => {
const servicesInfo = req.body ;
const cursor = servicesCollection.insertOne(servicesInfo) ;
const result = await cursor; 
res.status(201).send(result) ;
})
//read service data by limitation
app.get("/service-data-limit" ,  async (req , res) => {
const query = {} ;
const serviceDataLimit = servicesCollection.find(query);
const result =  await serviceDataLimit.limit(3).toArray()  ;
res.status(201).send(result) ;

})  

//read service data all
app.get("/services" ,  async (req , res) => {
const query = {} ;
const serviceDataLimit = servicesCollection.find(query);
const result =  await serviceDataLimit.toArray()  ;
res.status(201).send(result) ;

}) 
//red service data by specific id 
app.get("/services/:id" , async (req , res) => {
const id = req.params.id ;
const query = {_id : ObjectId(id)} ;
const cursor = servicesCollection.findOne(query) ;
const result = await cursor ;
res.status(201).send(result) ;
})

//post reviews information
app.post("/reviews" , async (req , res) => {
const reviewsData = req.body ;
const cursor = reviewsCollection.insertOne(reviewsData) ;
const result = await cursor ;
res.status(201).send(result) ;
})
 
//get all reviews data 
app.get("/reviews/:id" , async(req , res) => {
const reviewId = req.params.id ;
const query = {reviewId:reviewId} ;
const cursor = reviewsCollection.find(query).sort({ _id : -1  }) ;
const result = await cursor.toArray() ;
res.status(201).send(result) ;
})
//get my review by email query 
app.get("/my-reviews" , verifyJWT , async(req , res) => {
const email = req.query.email ;
const decodedEmail = req.decoded.email ;

//decoded email check 
if(email !==  decodedEmail ){
res.status(403).send({message:"unauthorize access"}) ;
}
const qurey = {reviewerEmail:email} ;
const cursor = reviewsCollection.find(qurey).sort({_id:-1})  ;
const result = await cursor.toArray() ;
res.status(201).send(result) ;
})

app.get("/my-reviews/:id" , async (req , res) => {
const id = req.params.id ;
console.log(id);
const query = {_id : ObjectId(id)} ;
const cursor = reviewsCollection.findOne(query) ;
const result = await cursor;
res.status(201).send(result) ;
})

//upate data of my review information
app.put("/my-reviews-edit/:id" , async (req , res) =>{
const id = req.params.id ;
const upateData = req.body ;
const {
serviceName , servicePrice , serviceDescription ,
reviewerRatings , servicePicture , feedbackMessage 
} = upateData ;
const query = {_id : ObjectId(id)} ;

const reviewUpdateDocs = {
$set:{
serviceName:serviceName ,
servicePicture:servicePicture ,
servicePrice:servicePrice ,
serviceDescription:serviceDescription ,
reviewerRatings:reviewerRatings , 
feedbackMessage:feedbackMessage ,  
}
}
// console.log(reviewUpdateDocs);
const option = {upsert:true} ;
const cursor = reviewsCollection.updateOne(query , reviewUpdateDocs , option) ;
const result = await cursor ;
res.status(201).send(result) ; 
})
//delete review information
app.delete("/my-reviews-delete/:id" , async (req , res) => {
const id = req.params.id ;
console.log("deleted id " , id);
const query = {_id : ObjectId(id)} ;
const cursor = reviewsCollection.deleteOne(query) ;
const result = await cursor;
console.log(result);
res.status(201).send(result) ;
})
//jwt token sign 
app.post("/authentication" , async(req , res ) => {
const email = req.body ;
const token = jwtToken.sign(email, process.env.SECRET_TOKEN , {
    expiresIn: "10h"
}) ;

res.status(201).send({token}) ;
})

} catch (error) {
console.log(error);
}
finally{
//ok
}
}

runServer().catch((error) => console.log(error))

app.listen(port , (req , res) =>{
console.log(`Your server running on port number: ${port}`)
})

// console.log(new Date().getSeconds() + 5 );
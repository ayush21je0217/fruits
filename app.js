const mongoose=require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.1");



const fruitSchema=new mongoose.Schema({
  name:{
    type:String,
    required:[true,"please check entry,  no name has been given"]
  },
  rating:Number,
  review:String
});


const Fruit=mongoose.model("Fruit",fruitSchema);
//save a document fruit having the below description in a data collection Fruit  
const fruit=new Fruit({
  // name:"Apple",
  rating:9,
  review:"best fruit ever"
})
// const mango=new Fruit({
//   name:"Mango",
//   rating:10,
//   review:"best thing to ever happen"
// })
// const kiwi=new Fruit({
//   name:"kiwi",
//   rating:8,
//   review:"okay not bad"
// })
// const banana=new Fruit({
//   name:"banana",
//   rating:9,
//   review:"banana shake is best"
// })
// Fruit.insertMany([mango,kiwi,banana]);
fruit.save();

const personSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  age:Number
});
const Person=mongoose.model("Person",personSchema);
const person1=new Person({
  name:"ayushman",
  age:20
});
// person1.save();
async function start(){
const froot=await Fruit.find();
froot.forEach(element => {
  console.log(element.name);
});
mongoose.connection.close();
}
start();

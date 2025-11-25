const { useReducer } = require("react");

//const tinderuser = new Object()//singelton object
const tinderuser = {}//not a singelton object
tinderuser.id = "sammy"
tinderuser.isloggedin = false

console.log(tinderuser);

const regularuser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "hitesh",
            lastname: "choudhary"
        }

    }
}
console.log(regularuser.fullname.userfullname.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
//const obj3 = {obj1,obj2}
//const obj3 = object.assign({},obj1,obj2)//sare object {}me jayenge {}target hai baki sab 
// source pahla element hamesha hoga
const obj3 = {...obj1,...obj2}
console.log(obj3);

const user = [
    {
    
    },
    {
    
    },
    {
        
    },
]
user[1].email
console.log(tinderuser);

console.log(objects.keys(tinderuser));//array ['id','name']
console.log(objects.values(tinderuser));
console.log(objects.entries(tinderuser));

console.log(tinderuser.hasownproperty('isloggedin'));//true





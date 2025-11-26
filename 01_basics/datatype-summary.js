// PRIMITIVE 

const { captureOwnerStack } = require("react");

// 7 types: string,number,bollean,null,undefined,symbol,bigint

const score = 100
const scorevalue = 100.3

const isloggedin = false
const outsidetemp = null
let useremail;

const id = symbol('123')
const anotherid = symbol('123')

console.log(id == anotherid);//false


// REFERENCE TYPE/NON PRIMITIVE//return of all non primitive type is object
// array ,object,functions


//******************memory*********

//Stack(primitive) , heap (non primitive)

let myyoutube = "skdffhn"

let anothername = myyoutube
anothername = "chai aur code"

console.log(myyoutube);//skdffhn
console.log(anothername);//chai aur code


let user = {
    email: "skjfbvnhj",
    Upi: "dfmgnjdg"
}


let usertwo = user

usertwo.email = "nfmnuje rv"

console.log(user.email);
console.log(usertwo.email);// both values are changed value




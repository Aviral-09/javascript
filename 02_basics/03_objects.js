//singleton

//object literals
//object.create
const mySym = Symbol("key1")
const jsuser = {
    name: "hitesh",
    age: 18,
    [mySym]: "mykey1",//to denote  as symbol use []
    location: "jaipur",
    email: "hitesh@gmail.com",
    isLoggedIn: false,
    lastloginday: ["monday","saturday"],
    "fullname": "hitesh chaoudhary"//can't access with daot operator
}

console.log(jsuser.email);
console.log(jsuser["email"]);
console.log(jsuser["fullname"]);
console.log(jsuser[mySym]);

jsuser.email = "hitesh@chatgpt.com"
//Object.freeze(jsuser)
jsuser.email = "hitesh@facebook.com"//does not change due to freez

jsuser.greeting = function(){
    console.log("hello js user");
}
console.log(jsuser.greeting());//hello js user

jsuser.greetingtwo = function(){
    console.log(`hello js user, ${this.name}`);
}
console.log(jsuser.greetingtwo());





function saymyname(){
console.log(H);
console.log(I);
console.log(N);
console.log(D);
console.log(I);
}

//saymyname()//hindi

// function addtwonumber(num1,num2){
//     console.log(num1 + num2);
// }
// addtwonumber(2,3)//5
// addtwonumber(2,"3")//23


function addtwonumber(num1,num2){
   // let result = num1+num2
    //return result
    //direct
    return num1 + num2
}

const result = addtwonumber(2,3)
console.log("result:",result);

function loginusermessage(username){
    if(username === undefined){
        console.log("please enter username");
        return//after return no other code executed

    }
    return `${username} just logged in`
}

console.log(loginusermessage("hitesh"))//hitesh just logged in 
console.log(loginusermessage())//undefined //please enter username

function calculatecartprice(...num1){///... =>rest operator
    return num1

}
console.log(calculatecartprice(200,400,500));

const user = {
    username: "hitesh",
    price: 109
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

//handleobject(user)

handleobject ({
    username: "aviral",
    price : 203
})

const mynewarray = [200,400,199,498]
function returnsecondvalue(getarray){
    return getarray[1]
}
console.log(returnsecondvalue(mynewarray));


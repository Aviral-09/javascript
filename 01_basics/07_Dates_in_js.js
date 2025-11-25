// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString);
console.log(typeof myDate);

let mycreateddate = new Date("01-14-2023")
console.log(mycreateddate.toLocaleDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(mycreateddate);
console.log(Math.floor(Date.now()/1000));


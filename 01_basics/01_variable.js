const accountId = 13872
let accountEmail = "jbdycbd@google.com"
var accountPassoward = "12345"
accountCity = "jaipur"


//accountId = 2// not allowed
accountEmail = "hjzdbbs@.com"
accountPassoward = "987"
accountCity = "mumbai"

/*
prefer not to use var beacuse of issue in block scoop and functional scope
*/
console.log(accountId);
console.table([accountId,accountEmail,accountPassoward,accountCity])


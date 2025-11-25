const marvel_heros = ["thor","iron"]
const dc_heros = ["superman","flash"]

marvel_heros.push(dc_heros)

console.log(marvel_heros);//array ke ander array aayega
console.log(marvel_heros[1][0]);//superman

const allheros = marvel_heros.concat(dc_heros)
console.log(allheros);//give new array

const all_new_heros = [...marvel_heros,...dc_heros]
console.log(all_new_heros);//ek ek element milega similar to concat


const another_array = [1,2[3,4],6,[5,7,8,[7,9,0]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);//all elements spreadout

console.log(Array.isArray("hitesh"));//false
console.log(Array.from("hitesh"));//make it array
console.log(Array.from({name: "hitesh"}));//intresting//gives []empty string

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));//combine and make array









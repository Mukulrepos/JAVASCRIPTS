const Arrays = [ 1,2,3,4,5,6,7,"mukul"]

const my_Hero=["iron man", "homi j Bhabha", "vikram sarabhi"];
console.log(my_Hero);


const myarr= new Array(1,2,3,4,5)
console.log(myarr);


console.log(my_Hero.length);

my_Hero.push("mukul")

console.log(my_Hero);

my_Hero.pop()
console.log(my_Hero);


//  unshift use the put the value on starting it

my_Hero.unshift("haward stark")
console.log(my_Hero);

my_Hero.shift()
console.log(my_Hero);


console.log(my_Hero.includes("iron man"))// check the value is in or not



console.log(my_Hero.indexOf("iron man"));// find the  index number use in the bracket value 
// output is 0

const my= my_Hero.join()

console.log(my_Hero);
console.log(my);// covert into array to strings

console.log(typeof my);



// slice
console.log("A",Arrays);

const new1 = Arrays.slice(1,3)
//  it can run start from 1 and end the 3-1 = 2
console.log(new1);// it doesn't change the the original array 
console.log("b", Arrays);


const new2=Arrays.splice(1,4)
console.log(new2);
console.log("c",Arrays);// origninal manuplate the array 




//  array part 2 


const marvel = [ "iron man ", "thor", "wanda", "strang"]
const dc = [ "superman"," batman","flash ","Aquaman",];


marvel.push(dc)
console.table([marvel])
// marvel.dc.pop()


const news = marvel.concat(dc)
console.log(news);

const ho = marvel.flat(Infinity)
console.log(ho);


console.log(Array.isArray("muku"))
console.log(Array.from("muku"))


//  make a object as a array 

let one = 100
let two = 200
let three= 300

console.log(Array.of(one,two, three));
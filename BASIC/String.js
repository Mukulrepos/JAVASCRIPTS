// STring is a line of menaing that can creata by a programer we can face some error

const client_name = "                mukul                          ";
const client_message = "hello! budy";
let text = "Please locate where 'locate' occurs!";

console.log(client_name.length); ///find the lenght for
console.log(client_name.charAt(2)); //  take the index give char at  value

console.log(client_name.charCodeAt(2)); // calculate the ascii value
console.log(client_name.slice(0, 3)); // slice start from 0 end the 3-1 = 2

console.log(client_name.substring(0, 4)); //slice start from 0 end the 4-1 = 3
console.log(client_name.toUpperCase()); // make the lower to upper
console.log(client_name.toLowerCase()); //make upper to lower
console.log(client_name.concat(client_message)); // add the two string

console.log(client_message.trim());// clear the extra space

console.log(client_name.padStart(2,"@"));


console.log(text.indexOf("locate"));
console.log(text.search("Please"));


console.log(text.matchAll());//  it use the matchall but use not the internet explorer



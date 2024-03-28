// function addtwonumbers(number1, number2) {
//   console.log(number1 + number2);
// }

function addtwonumbers(number1, number2) {
  return number1 + number2;
}
const add = addtwonumbers(10, null);
// console.log(add);

function customer_login(username = "customer") {
  if (!username) {
    console.log("please enter a name");
    return;
  }
  return `${username} just logged in :->`;
}

console.log(customer_login());

// practice
function battery_performance(battery_temperature) {
  if (typeof battery_temperature === "number") {
    console.log(`battery temperature is : ${battery_temperature}`);
    if (battery_temperature >= 30) {
      console.log("Bad health of a battery ");
      console.log("Need to change the battery");
      return;
    } else {
      console.log("Good health of a battery ");
    }
  } else {
    console.log("enter in a number form ");
  }
}

const battery_test = battery_performance(40);
console.log(battery_test);

function name_search(array, key, changes) {
  let system = array.indexOf(key);
  if (typeof key === "string" ) {
    array[system] = changes;
    return array;
  }
  return system;
}
let Sensor_Data = [1, 2, 3, 4, 5, 6, 7, 8, "Tony Stark"];
console.log(Sensor_Data);
let sensror_Date = name_search(Sensor_Data, "Tony Stark", "Haward stark");
console.log(sensror_Date);





// function change_customer_name(line_code , ){

// }
// function change_customer_name(){

// }

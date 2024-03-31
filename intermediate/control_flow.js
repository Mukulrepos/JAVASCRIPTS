// if
const isuser = true;

if (3 !== 3) {
  console.log("y");
}

const sensor_data = 500,
  fuel = 200; //height

if (sensor_data >= 100) {
  console.log("wheels off ");
  console.log("autopilot on", `${sensor_data}`);
} else {
  console.log("autopilot check the safe area to landing the plane");
}

// sort hand notatin
let balance = 1000;
if (balance > 5000) console.log("test");

const robot_total_data = 3000;

if (robot_total_data < 500) {
  console.log("recovery data access granted");
} else if (robot_total_data <= 2400) {
  console.log("less than 2400 not stores");
} else {
  console.log("------------------create a compress folder ----------");
}

// account

const customer = true;
const net_banking = true;
const loginbynumber = true;
const loginbyemial = true;

if (customer == true && net_banking == true) {
  console.log("you can start shopping ");
}
if (loginbyemial || loginbynumber) {
  console.log("you can access data");
}

const robot = 2;

switch (robot) {
  case 1:
    console.log("robot R1");
    break;
  case 2:
    console.log("robot R2");
    break;
  case 3:
    console.log("robot R3");
    break;
  case 4:
    console.log("robor R4");
    break;

  default:
    break;
}


// truth and false value

const useremail = ""
if(useremail){
    console.log("got user email");
}else{
    console.log("dont havae  user email")
}


// false value

const obj = {}

if(Object.keys(obj).length===0){
    console.log("Object is empty");
}


// nullish coalescing operator (??: )
let va1;
// va1 = 5??10
// va1=null ??10
va1=undefined??null??200
console.log(va1);
console.log(va1);


//  terniary operator
const ice= 30000

ice <=4000  ? console.log("less than 400"):console.log("more than 400");
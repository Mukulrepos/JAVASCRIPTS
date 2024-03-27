// singleton

// object literals
// frist way
const key_genrator = Symbol("Stranger");
const model = {
  user_name: "mr stanger person",
  model_price: 20000000,
  model_no: "DRONE32B-PC-4.4000",
  [key_genrator]: "Strangerp4000",
};
console.log(model);
console.log(model["user_name"]);
console.log(model["model_price"]);
console.log(model["software_update"]); // undefiined
console.log(model[key_genrator]);

model.user_name = "Tony Stark";
console.log(model);
// Object.freeze(model)// freeze use to constarnt the value inside the objects
// model.user_name="mr stark"
// console.log(model);

model.greeting = function () {
  console.log(`hello ${this.user_name}`);
};

console.log(model.greeting());

// season 2

const security_2 = {};

console.log(security_2);
security_2.software = "vision290";
security_2.databackup = "v83";
security_2.level = "patch 360 fusion";
security_2.physical = "data center main hall 2 ground floor";

console.log(security_2);

const password = {
  user_name: "Tony Stark",
  user_security: {
    user_level: {
      paasword: "Tonk Stark mark 85",
    },
  },
};
const family = {
  wife_name: "peper",
  child_name: "3000",
  Cheif_guard: "happy",
  company_name: "STARK INDUSTRIES",
  AI_Name: "edit",
  OS: "JARVIS",
};

console.log(password.user_security.user_level.paasword); // top secret

const Tonk_Stark_Systems = Object.assign({}, model, password, family);
console.table([Tonk_Stark_Systems]);

// const Tonk_Stark_Systems = { ...model, ...password, ...family };
// console.log(Tonk_Stark_Systems);

const robots = [
  {
    id: "TSS31",
    password: "TSSI",
  },
  {
    id: "TSS32",
    password: "TSSI",
  },
  {
    id: "TSS33",
    password: "TSSI",
  },
  {
    id: "TSS34",
    password: "TSSI",
  },
  {
    id: "TSS35",
    password: "TSSI",
  },
];

// robots[1].password//

console.log(security_2);
console.log(Object.keys(Tonk_Stark_Systems)); // u can access the main security  keys be alert
console.log(Object.values(Tonk_Stark_Systems)); // give value use in object
console.log(Object.entries(Tonk_Stark_Systems)); //give the value +keys

// console.log(family.hasOwnProperty(wife_name));

// seson 3

const terminator = {
  progarming_language: "c++/python",
  hacking: "cyberdeck",
  power: "nuclear fusion bettry",
  car_driving: "solid",
  location_tracking: "company",
  user_saftey_password: "shutdown",
  target: "security for host",
};
const { target: saftey } = terminator;
console.log(saftey);

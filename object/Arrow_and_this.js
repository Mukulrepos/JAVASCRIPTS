const customer = {
  model: "DSEKTOP_PC_4400",
  price: 200000,
  welcomemessage: function () {
    console.log(`${this.model} , welcome back sir`);
    // console.log(this);
  },
};

customer.welcomemessage();
customer.model = "DESKTOP-PC-88100";
customer.welcomemessage();

function robot() {
  let model = "desktop90";
  console.log(`${this.model}`);
  console.log(this.model);
}
robot();

// arrow function

const pari_ai = () => {
  let host = "mukul";
  console.log(`${this},hello`);
  return;
};

pari_ai("mukul");

const number = (num1, num2) => {
  return num1 + num2;

number(9,1)};

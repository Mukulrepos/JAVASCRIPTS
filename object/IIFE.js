(function callS() {
  console.log("hello");
})();
(
  // global scope k polutin se bachna ka liya iife ka use karta hai

  (hello) => {
    console.log(`${hello}`);
  }
)("mukul");
(
    // global scope k polutin se bachna ka liya iife ka use karta hai
  
    (hello) => {
      console.log(`${hello}`);
    }
  )("mukul");
  (
    // global scope k polutin se bachna ka liya iife ka use karta hai
  
    (hello) => {
      console.log(`${hello}`);
    }
  )("mukul");
  (
    // global scope k polutin se bachna ka liya iife ka use karta hai
  
    (hello) => {
      console.log(`${hello}`);
    }
  )("mukul");



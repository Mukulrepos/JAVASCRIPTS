// for (let i = 1; i <= 34; i++) {
//   console.log(i);
// }
// for (let i = 1; i <= 34; i++) {
//   const element = i;
//   if (element == 5) {
//     console.log("cut 5");
//     continue;
//   }
//   console.log(element);
// }
// for (let i = 1; i <= 10; i++) {
//     for(let j = 1 ; j <= 10; j ++){
//         console.log(i);

//     }
// }

//  calling terminator
const terminator = ["T-800", "T500", "T300", "T2000", "CYBORGS"];
for (let i = 0; i < terminator.length; i++) {
  const element = terminator[i];
  console.log(element);
}
//
let i = 0;
while(i <=10){
    console.log(i);
    i=i+1
}

for ( let hey of terminator){
    console.log(hey);
}

for(let keys in terminator){
    console.log(keys);
}
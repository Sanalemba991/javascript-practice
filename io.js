// let sam = 9000;
// let ram = 11110;
// const op = sam >= ram;  // This is correct, it will evaluate to true because 9000 >= 100

// if(op){
//     console.log("The condition is true");
// }
// else{
//     console.log("The condition is false");
// }

//&& shijinnnaba gi
// let hour=111;

// if(hour>=90 && hour<=100)
//  {
//     console.log("VERY GOod")
//  }else{
//     console.log("Re enter")
//
// job="sa"
// switch(job){
//     case "Engineer":
//         console.log("Engineer");
//         break;
//         case "Doctor":
//             console.log("Doctor");
//             break;
//             default:
//             console.log("Invalid job");
// Get input values from the user
// function remove(str) {
//     return str.replace(/[aeiou]/gi, '');
// }

// let myName = "Sanalemba";
// let result = remove(myName);
// console.log(result);

// let ram="SANALEMBA";

// const sonia=ram.toLocaleLowerCase();
// console.log(sonia);

// let number=[1,2,3,4,5,6,7,8,9,9,8,45,21];

// // let ArrayLength=number.length;
// // let idx=0;

// // console.log(number[idx++]);

// for(let idx=0;i<number.length;idx++){
//     console.log(number[idx]);
//

// push and PushSubscriptionOptions
// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 8, 45, 21];

// number.push(0,32)

// console.log(number)

// let num=[1,2,3,4,5,6,7,8,9]

// // for(let i=0;i<num.length;i++){
// //     console.log(num[i])
// // }
// for(let i=0;i<100;i++){
//     console.log(i)
// while loop used
// let sum=0;
// while(true){

//     console.log('loop');
//     sum++

// if(sum===10)
//     break;
// }
//do while loop where uses is always
// let i=0;
// do{
//     console.log(i);
//     i++;
// }while(i<10);
// let a=1;

// for(let i=1;i<=10;i++){
//     a +=i;

// }
// console.log(a)

//for input using array
// const course={
//     name:'Sanalemba',
//     duration:50,
//     price:90

// }
// for(const key in course){
//     console.log(course[key])
// }
// let num=[1,2,3,4]
// // for(let i=0;i<=num.length;i++){
// //     console.log(num[i])
// // }
// for(let element of num){
// console.log(element)
// }(

// slice na hapmningba mwongda happagi, aduga Push na back ta haptoine aduga
// let num =[2,3,4,5,6,7,0];

// num.splice(3,0,89,90,32,89);
// console.log(num)

// array check number check

// let number = [5, 4, 3, 2, 1, 3];

// const sam = number.indexOf(1);

// if (sam === -1) {
//     console.log("Value doesn't exist");
// } else {
//     console.log("Value exists at index " + sam);
// }

// Check if the number array includes 3
// if (number.includes(3)) {
//     console.log("Value exists in the array");
// } else {
//     console.log("Value doesn't exist in the array");
// }
//find method();
// const employees=[
//     {
//         id:1,
//         name:'Sanalemba'
//     },
//     {
//         id:2,
//         name:'Romario'
//     },
//     {
//         id:3,
//         name:'Jayadev'
//     }, {
//         id:4,
//         name:'Moni'
//     },
// ]

// const data=employees.find(function(e){
//     return e.name ==='Moni'

// });
// console.log(data);

//arrrow function add
// const add = (num1, num2) => num1 + num2;

// console.log(add(2, 9));

//array pusp pop splice unshift shift
// const numbers = [1, 2, 3, 4, 5, 6, 7, 89];

// const lastElement = numbers.pop();

// console.log(`lastElement :${lastElement}`);
// console.log(`numbers :${numbers}`);

// //concat array
// const San=[1,2,3,4,5];
// const Ram=[3,4,8,9,0];

// const Okay=San.concat(Ram);
// console.log(Okay);

//combine
// const exampleNumbersA=[1,2,3];
// const exampleNumbersB=[4,5,6];

// let combine=[...exampleNumbersA,...exampleNumbersB];
// console.log(combine)

//num index itterate using arrow function
// const number=[1,2,3,4,5,6,7,89];

// number.forEach((num,index)=>{
//     console.log(`Num:${num} Index:${index} `)
// })

// const number=[1,2,3,4,5,6];
// const numbe=num.join(',');
// console.log(numbe)

//sorting
// const courseName = "Javascript for";
// const parts = courseName.split(" ");  // Split by space to get words
// const ram = parts.join("-");  // Join words with hyphen
// console.log(ram);  // Output: "Javascript-for"

// let character=[1,4,6,7,1,2,4,2,3,4,55,90];
// character.sort();
// console.log(character);

// let characters=[1,4,6,7,1,2,4,2,3,4,55,90];
// character.reverse();
// console.log(character);

// let employees = [
//   { id: 1, name: "Jen" },
//   { id: 2, name: "Ram" },
// ];
// employees.sort((a, b) => {
//   const lowercaseA = a.name.toLowerCase();
//   const lowercaseB = b.name.toLowerCase();

//   if (lowercaseA < lowercaseB) return -1;
//   if (lowercaseA > lowercaseB) return 1;
//   return 0;
// });

//checking even or not all given number
// const numbers=[
//     2,,4,,90
// ];
// const areAllEven=numbers.every(number =>{
//     return number%2===0
// })
// console.log(`even :${areAllEven}`)

//some check whether is okay or not
// const numbers=[
//     2,,4,,90,3,6,6,4,3,7
// ];
// const areAllEven=numbers.some(number =>{
//     return number%2===0
// })
// console.log(`even :${areAllEven}`)


//fillter means searching divisible by 2
// const number=[1,2,3,4,5,6];
// const evenNumber=number.filter(number =>number%2 ===0);
// console.log(evenNumber);

//filtering means searching similar or not
// const Dat=[
// {id:1,name:'Sanathoiba',role:'Graphic Designer'},
// {id:2,name:'Sanatomba',role:'Developer'},
// {id:3,name:'Jerun',role:'UI AND UX DESIGNER'},
// ]
// const designer=Dat.filter(data=>data.role==='Graphic Designer');
// console.log(designer);
//map uses
// const num=[1,2,3,45,90];

// const Rome=num.map(nm=>nm+nm);
// console.log(Rome);
//uppercase Convert
const character=[
    'a','b','c','d','e'
]
const upperCase=character.map(char=>char.toUpperCase());
console.log(upperCase);
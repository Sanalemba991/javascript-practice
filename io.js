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
const employees=[
    {
        id:1,
        name:'Sanalemba'
    },
    {
        id:2,
        name:'Romario'
    },
    {
        id:3,
        name:'Jayadev'
    }, {
        id:4,
        name:'Moni'
    },
]

const data=employees.find(function(e){
    return e.name ==='Moni'


});
console.log(data);
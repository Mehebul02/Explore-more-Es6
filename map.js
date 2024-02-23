// // const numbers =[2,4,6,8,10,20,30,40];
// // // const doubled=[]
// // // for(const num of numbers){
// // //     const num1 = num*2;
// // //     doubled.push(num1);
// // // }
// // // console.log(doubled)

// // function double(num){
// //     console.log('Array of number',num)
// //     return num *2
// // }
// // const result =numbers.map(double);
// // console.log(result)
// const numbers =[2,4,6,8,10,20,30,40];

// const double = numbers.map(num => num+4);
// console.log(double);

// const friends =['Mehebul','Joy','Razwan','Somrat','Naem'];
// const lenght =friends.map(len => len[0]);
// console.log(lenght)

const numbers =[3,4,5,6,7,6];
const double =[]
for (const num of numbers){
    const result= num *2;
    double.push(result)
}
console.log(double);

const numbers2=[2,4,5,6,7,4];
const double2=numbers2.map(num => num*2);
console.log(double2);

const friends =['Mehebul','Somrat','Razwan','Naem'];
const friendsLength=friends.map(len => len[0]);
console.log(friendsLength)






9
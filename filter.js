const players =[55,66,77,88,99,77,55,33,22];
// const player=players.filter(p => p >30);
const player=players.filter(p => p % 2 ===0);
console.log(player)

const friends =['Mehebul','Somrat','Razwan','Naem'];
const oddFriends =friends.filter(f => f.length >4);
console.log(oddFriends)

const numbers =[10,22,33,44,55];
const findNumbers =numbers.find(num => num >100);
console.log(findNumbers)
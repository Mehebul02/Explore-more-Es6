const products =[
    { name:'hp',model:'34ty',price:45050, },
    { name:'lenovo',model:'36pi',price:75000, },
    { name:'deil',model:'20sm',price:61222, },
]
// const model =products.map(product => product[0].name);
// console.log(model)

// products.forEach(p => console.log(p.name))
const expensive =products.filter(p => p.price>50000);
console.log(expensive)

const notExpensive =products.find(p => p.price<50000);
console.log(notExpensive);

const reduces=products.reduce((c,p) => c+p.price,0);
console.log(reduces)
// class products{
//     country = 'Bangladesh'
//     person(per){
//         console.log(`Ami tmi ${per}`)

//     }
// }
// const newProducts =new products()
// console.log(newProducts);
// newProducts.person()

class teacher {
    constructor (names,subject){
        this.names=names;
        this.subject=subject;
    }
    lecture () {
        console.log("sir is teaching math");
    }
}
const harun=new teacher('Harun sir','System Analysis & Desing');
console.log(harun);


class cricketTornament{
    constructor(name,batingPosition,age){
        this.name=name;
        this.batingPosition=batingPosition;
        this.age=age;

    }

}
const alif =new cricketTornament('Mehebul Alif','Opening bating',20);
const rabbi=new cricketTornament('Rabbi','2nd position',19);
console.log(alif,rabbi);
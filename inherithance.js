class Vehicle{
    constructor(name,price){
        this.name=name;
        this.price=price;

    }
    move(){
        console.log('gari sole na sole nah sole nah re')
    }
}
class Bus extends Vehicle{
    constructor(name,price,seat,tricketPrice){
        // super মানে বস 
        super(name,price);
        this.seat=seat;
        this.tricketPrice=tricketPrice

    }
};
class Truck extends Vehicle{
    constructor(name,price,load){
        super(name,price);
        this.load=load;
    }
}

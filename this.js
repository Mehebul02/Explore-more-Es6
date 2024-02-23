class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sleep() {
    console.log(`sleeping now ${this.name}`);
  }
}
const kodom=new Person("Kodom Ali",20);
console.log(kodom)
kodom.sleep()
const badam =new Person('kaca badam dada kaca badam');
console.log(badam)
badam.sleep()

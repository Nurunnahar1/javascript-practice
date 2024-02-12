class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    hello() {
        console.log(`${this.name} says: Hello world!`);
    }
}

const newMan = new Person('Nasrin', 28);

newMan.hello();
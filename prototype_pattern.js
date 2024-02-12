const personPrototype = {
  hello() {
    console.log(`${this.name} says : Hello world`);
  },
};

function createNewPerson(name, age) {
  const man = Object.create(personPrototype);
  man.name = name;
  man.age = age;
  return man;
}

const newMan = createNewPerson("Nasrin", 28);

newMan.hello();

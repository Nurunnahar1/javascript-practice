function AnimalContainer() {
  const container = [];

  function getAllAnimals() {
    return container;
  }

  function addAnimal(name) {
    container.push(name);
  }

  function removeAnimal(name) {
    const index = container.indexOf(name);
    if (index < 1) {
      throw new Error(`${name} not found.`);
    }
    container.splice(index, 1);
  }

  return {
    add: addAnimal,
    get: getAllAnimals,
    remove: removeAnimal,
  };
}

const zooContainer = AnimalContainer();

// zooContainer.add(["Lion", "Tiger", "Snake", "Monkey"]);

zooContainer.add("Lion");
zooContainer.add("Tiger");
zooContainer.add("Snake");
zooContainer.add("Monkey");

zooContainer.remove("Tiger");
console.log(zooContainer.get());

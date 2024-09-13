class Animal {
  #name
  #species
  #energy
  static remainingAnimals = 0
  static energy = this.energy
  constructor(name, species, energy) {
    this.#name = name
    this.#species = species
    this.#energy = energy
    Animal.remainingAnimals++
  }

  get name() {
    return this.#name
  }
  get species() {
    return this.#species
  }
  get energy() {
    return this.#energy
  }
  set name(newName) {
    this.#name = newName
  }
  set species(newSpecies) {
    this.#species = newSpecies
  }
  set energy(newEnergy) {
    this.#energy = newEnergy
  }


}

class Bird extends Animal {
  #canFly
  static energy = 100
  constructor(species, name, canFly) {
    super(species, name)
    this.#canFly = canFly
  }
  get canFly() {
    return this.#canFly
  }
  get energy() {
    return super.energy
  }
  set energy(newEnergy) {
    super.energy = super.energy - newEnergy
  }
  changedEnergy(val) {
    Bird.energy = (Bird.energy + val) < 0 ? 0 : (Bird.energy + val)
  }
  showEnergy() {
    return Bird.energy
  }
  attack(target) {
    if(this.showEnergy() > 0) {
      this.changedEnergy(-20)
      target.changedEnergy(-20)
      console.log(
  `${this.name} swoops in to attack ${target.name}!
${this.name}'s energy: ${this.showEnergy()}
${target.name}'s energy: ${target.showEnergy()}`)
      if(this.showEnergy() <= 0) {
        console.log(`${target.name} wins! ${this.name} is out of energy!`)
        return Animal.remainingAnimals--
      } else if (target.showEnergy() <= 0) {
        console.log(`${this.name} wins! ${target.name} is out of energy!`)
        return Animal.remainingAnimals--
      }
    } else {
      console.log(`${this.name} cannot attack...`)
    }
  }
  eat() {
    if(this.showEnergy() > 0) {
    this.changedEnergy(10)
    console.log( `${this.name} eats and gains energy! ${this.name}'s energy:${this.showEnergy()}`)
    } else {
      console.log(`${this.name} has already lost...`)
    }
  }
}

class Mammal extends Animal {
  #furColor
  static energy = 200
  constructor(species, name, furColor) {
    super(species, name)
    this.#furColor = furColor
  }
  get furColor() {
    return this.#furColor
  }
  get energy() {
    return super.energy
  }
  set energy(newEnergy) {
    super.energy = super.energy - newEnergy
  }
  changedEnergy(val) {
    Mammal.energy = (Mammal.energy + val) < 0 ? 0 : (Mammal.energy + val)
  }
  showEnergy() {
    return Mammal.energy
  }

  attack(target) {
    if(this.showEnergy() > 0) {
      this.changedEnergy(-50)
      target.changedEnergy(-50)
      console.log(
  `${this.name} lunges to attack ${target.name}!
${this.name}'s energy: ${this.showEnergy()}
${target.name}'s energy: ${target.showEnergy()}`)
      if(this.showEnergy() <= 0) {
        console.log(`${target.name} won!`)
        return Animal.remainingAnimals--
      } else if (target.showEnergy() <= 0) {
        console.log(`${this.name} won!`)
        return Animal.remainingAnimals--
      }
    } else {
      console.log(`${this.name} cannot attack...`)
    }
  }
  eat() {
    if(this.showEnergy() > 0) {
    this.changedEnergy(20)
    console.log( `${this.name} eats and gains energy! ${this.name}'s energy:${this.showEnergy()}`)
    } else {
      console.log(`${this.name} has already lost...`)
    }
  }
}

class Reptile extends Animal {
  #coldBlooded
  static energy = 100
  constructor(species, name, coldBlooded) {
    super(species, name)
    this.#coldBlooded = coldBlooded
  }
  get coldBlooded() {
    return this.#coldBlooded
  }
  get energy() {
    return super.energy
  }
  set energy(newEnergy) {
    super.energy = super.energy - newEnergy
  }
  changedEnergy(val) {
    Reptile.energy = (Reptile.energy + val) < 0 ? 0 : (Reptile.energy + val)
  }
  showEnergy() {
    return Reptile.energy
  }

  attack(target) {
    if(this.showEnergy() > 0) {
      this.changedEnergy(-30)
      target.changedEnergy(-30)
      console.log(
  `${this.name} lunges to attack ${target.name}!
${this.name}'s energy: ${this.showEnergy()}
${target.name}'s energy: ${target.showEnergy()}`)
      if(this.showEnergy() <= 0) {
        console.log(`${target.name} won!`)
        return Animal.remainingAnimals--
      } else if (target.showEnergy() <= 0) {
        console.log(`${this.name} won!`)
        return Animal.remainingAnimals--
      }
    } else {
      console.log(`${this.name} cannot attack...`)
    }
  }

  eat() {
    if(this.showEnergy() > 0) {
    this.changedEnergy(15)
    console.log( `${this.name} eats and gains energy! ${this.name}'s energy:${this.showEnergy()}`)
    } else {
      console.log(`${this.name} has already lost...`)
    }
  }
}


// DRIVER CODE: Create instances of the subclasses and use their properties and methods. You can modify this to add more attacks and eating actions.

const eagle = new Bird("Eagle", "Bird of Prey", true);
console.log(`Name: ${eagle.name}, Species: ${eagle.species}, Can Fly: ${eagle.canFly}`);

const lion = new Mammal("Lion", "Big Cat", "Golden");
console.log(`Name: ${lion.name}, Species: ${lion.species}, Fur Color: ${lion.furColor}`);

const snake = new Reptile("Snake", "Serpent", true);
console.log(`Name: ${snake.name}, Species: ${snake.species}, Cold-Blooded: ${snake.coldBlooded}`);

// Example attack
console.log("\n--- Attacks ---");
eagle.attack(lion);
lion.attack(snake);

// Display the remaining number of animals with energy
console.log(`\nRemaining animals with energy: ${Animal.remainingAnimals}`);

// Example eating
console.log("\n--- Eating ---");
eagle.eat();
lion.eat();
snake.eat();




// if(energy < 0 ) {
//   Animal.remainingAnimals--
// }
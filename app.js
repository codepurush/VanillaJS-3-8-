/*
 * Programming Quiz - Navigating the Food Chain (3-8)
 */

// change the values of `eatsPlants` and `eatsAnimals` to test your code
var eatsPlants = false;
var eatsAnimals = true;

var category = (eatPlants) ? (eatAnimals) ? "omnivore" : "herbivore" : eatAnimals ? "carnivore" : undefined;

console.log(category);

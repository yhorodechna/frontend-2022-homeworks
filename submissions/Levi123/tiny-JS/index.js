/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: https://github.com/Levi123/a-tiny-JS-world
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here
const dog = {
   species: 'dog',
   name: 'Rich',
   gender: 'male',
   legs: 4,
   hands: 0,
   saying: 'Hav-hav!',
   friends: ['Bonya'],
}

const cat = {
   species: 'cat',
   name: 'Bonya',
   gender: 'female',
   legs: 4,
   hands: 0,
   saying: 'Mr-mr-mr',
   friends: ['Rich', 'Catwoman'],
}

const female = {
   species: 'human',
   name: 'Olya',
   gender: 'female',
   legs: 4,
   hands: 4,
   saying: "Glory to Ukraine",
   friends: ['Yura', 'Rich'],
}

const male = {
   species: 'human',
   name: 'Yura',
   gender: 'male',
   legs: 4,
   hands: 4,
   saying: "Glory to Ukraine",
   friends: ['Olya', 'Bonya'],
}

const catWoman = {
   species: 'human',
   name: 'Catwoman',
   gender: 'female',
   legs: 4,
   hands: 4,
   saying: cat.saying,
   friends: ['Bonya']
}
// ======== OUTPUT ========
/* Use print(message) for output.
   Default tag for message is <pre>. Use print(message,'div') to change containing element tag.

   Message can contain HTML markup. You may also tweak index.html and/or styles.css.
   However, please, REFRAIN from improving visuals at least until your code is reviewed
   so code reviewers might focus on a single file that is index.js.
   */

const allCharactersArray = [catWoman, male, female, cat, dog]

function arrayOfPropToPrint(personToPrint){
   const prop = ['species', 'name', 'gender', 'legs', 'hands', 'saying', 'friends']
   const propToPrint = prop.map((propOfObj) => personToPrint[propOfObj]);
   let newStr = propToPrint.join('; ');
   print(newStr);
}

function printAllObjects(arrayAllObjects){
   arrayAllObjects.forEach((characters) => {
      arrayOfPropToPrint(characters);
   })
}

printAllObjects(allCharactersArray);

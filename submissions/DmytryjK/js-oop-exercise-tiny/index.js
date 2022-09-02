/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here


// ======== OUTPUT ========
/* Use print(message) for output.
   Default tag for message is <pre>. Use print(message,'div') to change containing element tag.

   Message can contain HTML markup. You may also tweak index.html and/or styles.css.
   However, please, REFRAIN from improving visuals at least until your code is reviewed
   so code reviewers might focus on a single file that is index.js.
   */

/* Print examples:
   print('ABC');
   print('<strong>ABC</strong>');
   print('<strong>ABC</strong>', 'div');

   print('human; John; male; 2; 2; Hello world!; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny', 'div');
   */

class Inhabitant {
   constructor(name, spacies, gender, saying, legs) {
      this.name = name;
      this.spacies = spacies;
      this.gender = gender;
      this.saying = saying;
      this.legs = legs;
      this.property = ['name', 'spacies', 'gender', 'saying', 'legs'];
   }
   get props() {
      return this.property.map(key => this[key]).join('; ');
   }
}

class Human extends Inhabitant {
   constructor (name, gender, saying) {
      super(name, 'human', gender, saying, '2');
      this.hands = 2;
   }
   get props() {
      return super.props + `; ${this.hands}`;
   }
}

class Dog extends Inhabitant {
   constructor (name, gender, saying) {
      super(name, 'dog', gender, saying, '4');
   }
   get props() {
      return super.props;
   }
}

class Cat extends Inhabitant {
   constructor (name, gender, saying) {
      super(name, 'cat', gender, saying, '4');
   }
   get props() {
      return super.props;
   }
}

class CatWoman extends Cat {
   constructor (name, gender) {
      super(name, gender, cat.saying);
      this.spacies = 'catWoman';
      this.legs = 2;
      this.hands = 2;
   }
   get props() {
      return super.props + `; ${this.hands}`;
   }
}

const dog = new Dog('Toby', 'male', 'woof-woof!'),
      cat = new Cat('Mike', 'male', 'Murrrrrrrrrrr...'),
      catWoman = new CatWoman('Kate', 'female'),
      manJake = new Human('Jake', 'male', 'Hey, whats up?'),
      manSpensor = new Human('Spensor', 'male', 'The weather is fine'),
      womanJessy = new Human('Jessy', 'female', 'Im a little tired today'),
      womanMargo = new Human('Margo', 'female', 'Your shirt is just rubbish!');

const inhabitants = [dog, cat, catWoman, manJake, manSpensor, womanJessy, womanMargo];

inhabitants.forEach(item => {
   print(item.props);
});

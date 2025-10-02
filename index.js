//TODO: Code Questions 1 to 6

//? Code Question 1
/*
const hamburger = { name: "Cheese Burger", weight: 250 };
const secondBurger = hamburger;
secondBurger.name = "Double Cheese Burger";
secondBurger.weight = 500;

console.log(hamburger.name); // ? 
console.log(secondBurger.name); // ?
*/
// * in entrambi i casi stamperà in console "Double Cheese Burger", il nome dato alla variabile secondBurger. Loggando solo il .name non vedremo il resto delle proprietà dell'oggetto.
//* in questo caso è stato creato un solo oggetto in memoria

//? Code Question 2
/*
const hamburger = {
  name: "Cheese Burger",
  weight: 250,
  ingredients: ["Cheese", "Meat", "Bread", "Tomato"],
};

const secondBurger = { ...hamburger };
secondBurger.ingredients[0] = "Salad";

console.log(hamburger.ingredients[0]); // ?
console.log(secondBurger.ingredients[0]); // ?
*/
//* i due log stamperanno entrambi "Salad", essendo secondBurger una shallow copy di hamburger ottenuta tramite spread. Il metodo spread non copia però la referenza all'array ingredients.
//* sono due oggetti diversi che condividono la stessa proprietà ingredients.

//? Code Question 3
/*
const hamburger = {
  name: "Cheese Burger",
  weight: 250,
  maker: {
    name: "Anonymous Chef",
    restaurant: {
      name: "Hyur's Burgers",
      address: "Main Street, 123",
      isOpen: true,
    },
    age: 29,
  },
};

const secondBurger = structuredClone(hamburger);
const thirdBurger = structuredClone(hamburger);
*/
//* con l'esecuzione di questo codice sono stati creati in memoria 3 oggetti con identiche proprietà. Usando structuredClone possiamo creare Deep Copies degli oggetti complessi.

//? Code Question 4
/*
const chef = {
  name: "Chef Hyur",
  age: 29,
  makeBurger: (num = 1) => {
    console.log(`Ecco ${num} hamburger per te!`);
  },
};

const restaurant = {
  name: "Hyur's Burgers",
  address: {
    street: "Main Street",
    number: 123,
  },
  openingDate: new Date(2025, 3, 11),
  isOpen: false,
};
*/
//* metodo migliore per clonare chef è JSON.parse(JSON.stringify())
//! correzione - il metodo migliore per clonare chef è spread (...x). Con JSON.parse(JSON.stringify()) perderemmo la funzione makeBurger
//* Il metodo migliore per clonare l'oggetto restaurant è structuredClone.
//! se usassi JSON.parse(JSON.stringify()) perderemmo Date convertendolo in testo.

//? Code Question 5 (bonus)
/*
const hamburger = {
  name: "Cheese Burger",
  weight: 250,
  maker: {
    name: "Anonymous Chef",
    restaurant: {
      name: "Hyur's Burgers",
      address: "Main Street, 123",
      isOpen: true,
    },
    age: 29,
  },
};

const newRestaurant = { ...hamburger.maker.restaurant };
newRestaurant.name = "Hyur's II";
newRestaurant.address = "Second Street, 12";
const secondBurger = { ...hamburger };
secondBurger.maker.restaurant = newRestaurant;
secondBurger.maker.name = "Chef Hyur";

console.log(hamburger.maker.name); //? Anonymous Chef
//! correzione - Chef Hyur
console.log(secondBurger.maker.name); // ? Chef Hyur
console.log(hamburger.maker.restaurant.name); // ? Hyur's II
console.log(secondBurger.maker.restaurant.name); // ? Hyur's II
*/
//* lo spread copia solo il primo livello, non oltre
//* Oltre a hamburger, maker e restaurant sono stati creati tramite spread due nuovi oggetti.

//? Code Question 6 (bonus)

const chef = {
  name: "Chef Hyur",
  age: 29,
  makeBurger: (num = 1) => {
    console.log(`Ecco ${num} hamburger per te!`);
  },
  restaurant: {
    name: "Hyur's Burgers",
    welcomeClient: () => {
      console.log("Benvenuto!");
    },
    address: {
      street: "Main Street",
      number: 123,
      showAddress: () => {
        console.log("Main Street 123");
      },
    },
    isOpen: true,
  },
};

//* qui il metodo migliore per copiare l'oggetto chef è l'utilizzo cdi uno spread ricorsivo
//* spread copia anche le funzioni ma non copia oltre il primo livello
//* con il primo spread quindi copiamo le proprietà di primo livello di chef
//* un secondo spread di restaurant crea un nuovo oggetto restaurant
//* l'ultimo spread crea un nuovo oggetto address, preservando le funzioni annidate
//* la soluzione sarà quindi:
//* cloned chef={...chef,
//*  restaurant:{...chef.restaurant,
//* address: {...chef.restaurant.address,}}}

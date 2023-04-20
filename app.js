
const mongoose = require("mongoose");
const Fruit = require("./Fruit");
const Person = require("./Person");

// mongoose.connect("mongodb://127.0.0.1:27017/fruitDB", { useNewUrlParser: true });


mongoose.connect('mongodb://127.0.0.1:27017/fruitsDB')
    .then(() => console.log('Connected!'));

const person = new Person({
    name: "Marcus",
    age: 25
});

// const fruit = new Fruit ({
//     name: "Apple",
//     rating: 7,
//     review: "Pretty solid as a fruit."
// });

const kiwi = new Fruit({
    name: "Kiwi",
    score: 10,
    review: "The Best fruit!"
});

const orange = new Fruit({
    name: "Orange",
    score: 4,
    review: "Too sour for me"
});

const banana = new Fruit({
    name: "Banana",
    score: 3,
    review: "Weird texture"
});

// person.save();

// Fruit.insertMany([kiwi, orange, banana]);
//<<  use this to find all queries >>
// Fruit.find()
//     .then(function (fruits) {
//         console.log(fruits);
//     })
//     .catch(function (err) {
//         console.log(err);
// });
//<< use this to find specific object >>
Fruit.find()
    .then(function (fruits) {
        fruits.forEach(function (fruit) {
            console.log(fruit.name);
        });
    })
    .catch(function (err) {
        console.log(err);
    });

// run()
// async function run() {
//     const fruit = new Fruit({ name:
//         "Apple",
//         raing: 7,
//         review: "Pretty solid as a fruit. "
//     })
//     console.log(fruit)
// }

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
//     raing: 7,
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

Fruit.insertMany([kiwi, orange, banana]);

// run()
// async function run() {
//     const fruit = new Fruit({ name:
//         "Apple",
//         raing: 7,
//         review: "Pretty solid as a fruit. "
//     })
//     console.log(fruit)
// }
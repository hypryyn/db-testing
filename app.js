
const mongoose = require("mongoose");

// mongoose.connect("mongodb://127.0.0.1:27017/fruitDB", { useNewUrlParser: true });


mongoose.connect('mongodb://127.0.0.1:27017/fruitsDB')
    .then(() => console.log('Connected!'));

// const fruitSchema = new mongoose.Schema ({
//     name: String,
//     rating: Number,
//     rating: String
// });

// const Fruit = mongoose.model('Fruit', fruitSchema);

// const fruit = new Fruit ({
//     name: "Apple",
//     raing: 7,
//     review: "Pretty solid as a fruit."
// });
run()
async function run() {
    const fruit = await Fruit.create({ name: 
        "Apple",
        raing: 7,
        review: "Pretty solid as a fruit. "
    })
    console.log(fruit)
}
const mongoose = require('mongoose');

const veggieSchema = new mongoose.Schema({
    veggieName: String,
    color: String,
    age: Number,
    readyToEat: Boolean
})


const MyVeggie = mongoose.model('myveggies', veggieSchema)
//myveggies
// https://mongoosejs.com/docs/models.html
// The first argument is the singular name of the collection your model is for. Mongoose automatically looks for the plural, lowercased version of your model name. Thus, for the example above, the model MyVeggie is for the MyVeggies collection in the database.

module.exports = MyVeggie;
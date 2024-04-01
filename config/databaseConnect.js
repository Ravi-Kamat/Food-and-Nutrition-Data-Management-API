
const mongoose = require("mongoose")
mongoose.connect('mongodb://127.0.0.1:27017/foodData')
    .then(() => console.log('DB is connected Successfully'))
    .catch((e) => {
        console.log("Error is : ", e);
    })
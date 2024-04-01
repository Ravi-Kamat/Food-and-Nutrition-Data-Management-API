const express = require("express")
const foodData = require("./model/foodData")
const bodyParser = require("body-parser")
const connetDb = require('./config/databaseConnect')
const { default: mongoose } = require("mongoose")
const app = express()
const port = 3020

app.use(bodyParser.json())

app.post('/fooditems', async (req, res) => {
    try {
        let food = req.body;

        if (!Array.isArray(food)) {
            food = [food];
        }

        for (const foodItem of food) {
            const newFoodItem = new foodData(foodItem);
            await newFoodItem.save();
        }

        res.status(201).json({
            message: 'Successfully saved food items'
        });
    } catch (error) {
        console.error("Error:", error); // Log the error for debugging
        res.status(500).json({
            message: "Oops! Something went wrong",
            error: error.message
        });
    }
});

app.get('/getfooditems', async (req, res) => {
    try {
        const getFoodItems = await foodData.find()
        if (!getFoodItems || getFoodItems.length === 0) {
            return res.status(404).json({ message: 'No food items found' })
        }

        res.status(200).json(getFoodItems)
    } catch (error) {
        res.status(500).json({
            message: "Opps! Something went wrong",
            error: error.message
        })
    }
})

app.put('/updatefooditems/:id', async (req, res) => {
    try {
        const { id } = req.params
        const updateFoodData = req.body

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                message: "Invalid food item ID incorrect"
            })
        }

        const updatedFoodItem = await foodData.findByIdAndUpdate(id, updateFoodData, { new: true });

        if (!updatedFoodItem) {
            return res.status(404).json({
                message: 'food item not found'
            })
        }
        res.status(200).json(updateFoodData)
    } catch (error) {
        res.status(500).json({
            message: "Oops! Something went wrong",
            error: error.message
        })
    }
})


app.delete('/deleteitem/:id', async (req, res) => {

    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                message: 'Invalid food id'
            })
        }

        const deleteFoodIem = await foodData.findByIdAndDelete(id)

        if (!deleteFoodIem) {
            return res.status(404)({
                message: "Food item not found"
            })
        }

        res.status(204).json({
            message: "Food item deleted Successfully"
        })

    } catch (error) {
        res.status(500).json({
            message: "Opps! Somthing went wrong",
            error: error.message
        })
    }


})





app.listen(port, () => {
    console.log(`server is up at ${port}`);
})


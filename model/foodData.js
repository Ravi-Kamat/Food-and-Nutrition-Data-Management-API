const mongoose = require("mongoose")

const foodSchema = new mongoose.Schema(
    {
        "food_items": [
            {
                "allergens": ["String"],
                "food_group": "String",
                "description": "String",
                "ingredients": ["String"],
                "serving_size": "String",
                "certifications": ["String"],
                "food_item_name": "String",
                "health_benefits": ["String"],
                "country_of_origin": "String",
                "preparation_methods": ["String"],
                "dietary_restrictions": ["String"],
                "brand_or_manufacturer": "String",
                "nutritional_information": {
                    "fat": "Number",
                    "fiber": "Number",
                    "protein": "Number",
                    "calories": "Number",
                    "carbohydrates": "Number"
                }
            }
        ]
    }



)

const foodData = new mongoose.model('fooddata', foodSchema)

module.exports = foodData
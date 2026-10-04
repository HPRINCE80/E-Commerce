import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    tittle:{
        type:String,
        required:true,
        minLenght:2,
        maxLength:100

    },
    description:{
        type:String,
        required:20,
        maxLength:500
    },
    images: {
        type: [{
            type:String
        }],
        validate: {
            validator: images => images.length <= 5,
            message: "A product can have a maximum of 5 images"
        }
    },
    price:{
        amount:{
            type:String,
            required:true
        },
        currency:{
            type:String,
            enum:["INR", "USD"],
            default: "INR"
        }
    },

    sizes:[
        {
            size:{
                type:String,
                enum:["XS","S","M","L","XL","XXL"],
                required: true
            },
            stock:{
                type:Number

            },
           
        }
    ], 
    seller:{
                type:mongoose.Types.ObjectId,
                ref:"users",
                required:true
            },
            published:{
                type:Boolean,
                default:false


            }


})




const productModel = mongoose.model("products", productSchema);

export default productModel;
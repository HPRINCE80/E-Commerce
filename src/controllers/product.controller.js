import mongoose from "mongoose";
// import { ConnectionStates } from "mongoose";
import productModel from "../models/product.model.js"
import {uploadfile} from "../Services/storage.service.js"

export  async function createProduct(req,res){
    console.log(req.body);
    console.log(req.file)

    const filesUrls = []

    for(let i =0;i<req.files.length;i++){
        const response = await uploadfile({
            buffer:req.files[i].buffer,
            fileName:req.files[i].originalname
        })

        filesUrls.push(filesUrls);
    }


    const product = await productModel.create({
        title:req.body.title,
        description:req.body.description,
        price:{
            amount: req.body.price.amount,
            currency:req.body.price.currency
        },
        sizes:req.body.sizes,
        image:filesUrls,
        seller:req.user.userId

    })

    res.status(200).json({

        message:"Product created successfully",
        data:{
            product
        }
    })
}


export async function listAllProducts(req,res) { 
    const products = await productModel.find()
      published:true

    res.status(200).json({
        message:"Products fetched successfully",
        data:{
            products
        }

    })
}
export async function listAllProducttoseller(req,res) {  

    const products = await productModel.find({})

    return res.status(200).json({
        message:"All product fected successfully",
        data:{
            products
        }
    })

    
}
export async function unlistProduct(req,res){

    const {id} = req.params

    const product = await productModel.findById(id)

    if(!product){
        return res.status(404).json({
            message:"product not found by id"
        })
    }

    await productModel.findByIdAndUpdate(id, {
        published: false
    })

    // const product = await 

}

export async function listProduct(req,res){

    const {id} = req.params

    const product = await productModel.findById(id)

    if(!product){
        return res.status(404).json({
            message:"product not found by id"
        })
    }

    await productModel.findByIdAndUpdate(id, {
        published: true
    })

    // const product = await 

}
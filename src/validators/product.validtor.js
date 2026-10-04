import { body, param, validationResult } from "express-validator"
import { isObjectIdOrHexString } from "mongoose"

export const createProductValidator = [
   body("tittle")
      .exists().withMessage("Title is required").bail()
      .isString().withMessage("Title must be a String").bail()
      .trim()
      .isLength({ min: 2, max: 100 }).withMessage("Title length must be between 2 to 100 Character").bail()
      .isAlpha("en-US", { ignore: " " }).withMessage("Title can Only have english"),
   body("description")
      .exists().withMessage("Description is required").bail()
      .isString().withMessage("Description must be string").bail()
      .trim()
      .isLength({ min: 10, max: 500 }).withMessage("Description length must be between 20 to 500"),
   body("price.amount")
      .exists().withMessage("price amount is required")
      .isFloat({ min: 0 }).withMessage("price amount must be a floating "),
   body("price.currency")
      .exists().withMessage("Currency is required").bail()
      .isString().withMessage("Currency must be a string value")
      .isIn(["INR", "USD"]).withMessage("Currency either be INR or USD"),

   body("size.*.size")
      .exists().withMessage("size must be present in every entry of sizes array").bail()
      .trim()
      .isIn(["XS", "S", "M", "L", "XL", "XXL"]).withMessage("size can be one of these XS,S,M,L,XL,XXL"),
   body("sizes.*.sizes")
      .exists().withMessage("stock must be preseny in every entry of the sizes array").bail()
      .isIn({ min: 0 }).withMessage("Stock must be a integer value"),
   (req, res, next) => {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
         return res.status(400).json({
            message: "Invalid Request",
            errors: errors.array()

         })
      }
      next()
   }
]


 export const unlistProductValidator = [
   param("id")
          .exists().withMessage("product id is required in req params").bail()
          .isMongoId().withMessage("product is must be a valid mongo object "),
     
   (req, res, next) => {
   const error = validationResult(req)

   if (!error.isEmpty()) {
      return res.status(400).json({
         message: "Invalid data",
         errors: error.array()
      })
   }
   next();
}  
 ]

//  export const  unlistProduct(req,res)[
//    const {id} = req.params

//    cosnt product = await productModel.findById(id)

//    if(!product) {
//       return res.status(404).json({
//          message: "Product not found by id"
//       })
//    }

//    await productModel.findByIdAndUpdate(id,{
//       published: false

//    })

// ]
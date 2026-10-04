import {body, validationResult } from "express-validator"

export const registervalidator = [
    body('email')
         .exists().withMessage("Email is required").bail()
         .trim()
         .isEmail().withMessage("Enter the Email"),

    body("name")
        .exists().withMessage("Name is required").bail()
        .isString().withMessage("Name must be a string")
        .trim()
        .isLength({min:2 , max:50}).withMessage("Name length must be between 2 to 20"),

    body("password")
        .exists().withMessage("password is required").bail()
        .isString().withMessage("password must be string")
        .trim()
        .isLength({min: 6}).withMessage("Minimume 6 character"),
       (req,res) => {
        const errors = validationResult(req) 

        if(!errors.isEmpty()) {
            return res.status(400).json({
                message : "Invalid Request",
                errors: errors.array()
            })
        }
        next()
       }
    ]



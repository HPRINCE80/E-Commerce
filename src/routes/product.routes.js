import { Router} from "express";
import { createProductValidator, unlistProductValidator } from "../validators/product.validtor.js";
import {authentication, authenticateSeller} from "../middleware/auth.middleware.js"
import {createProduct, listAllProducts,unlistProduct ,listProduct,listAllProducttoseller } from "../controllers/product.controller.js";
import multer from "multer"

const upload = multer({
    storage: multer.memoryStorage(),
    limits:{
        files:5,
        fileSize: 1* 1024 *1024
    },
})
const router = Router()


router.post("/",authentication,createProductValidator)




router.get("/",authentication,listAllProducts)
router.get("/seller",authentication,listAllProducttoseller)

router.patch("/unlist/:id",authentication, authenticateSeller,unlistProductValidator, unlistProduct)

router.patch("/unlist/:id", authentication,authenticateSeller,listAllProducts,listProduct)
export default router 
import {Router} from "express"
import { addTocart } from "../controllers/cart.controller.js";
import { authentication } from "../middleware/auth.middleware.js";
import { addToCartValidator } from "../validators/card.validator.js ";

const router = Router();

/**
 * @methode POST
 * @route /api/cart
 * @access protected
 * @description Add an product to the user's cart
 */


router.post("/",authentication, addToCartValidator, addTocart)


export default router
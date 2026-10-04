import { Router } from "express";
import { registervalidator } from "../validators/authValidator.js";
import { register } from "../controllers/auth.controller.js";
import { getMe } from "../controllers/auth.controller.js";
import { authentication } from "../middleware/auth.middleware.js";

const router = Router()

router.post("/register", registervalidator, register);

/**
 * @GEt / api/auth/me
 */

 
router.get("/me" , authentication, getMe)

export default router
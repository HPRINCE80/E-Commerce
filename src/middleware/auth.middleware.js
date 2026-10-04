import { readAccessToken } from "../utils/auth.util.js";

export function authentication(req, res, next){
    if(!accessToken){
        return res.status(400).json({
            message: "Access token not found in the request header"
        })
    }

    try {
        const decoded = readAccessToken(accessToken)

        req.user = decoded

        next()
    }

    catch(err){

        res.status(401).json({
            message:"Invalid or Expired access token"
        })
    }
}

export function authenticateSeller(req,res,next) {
    if(req.user.role !== "seller"){
        return res.status(403).json({
            message:"user is not authorized to perform this action"
        })
    }
    next()
}
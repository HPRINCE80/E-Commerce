import express from "express"
import authRouter from "../routes/auth.routes.js"
import cookieParser  from "cookie-parser";
import productRoute from "../routes/product.routes.js"
import cartRoute from "../routes/cart.routes.js"

const app = express();

app.use(express.json())
app.use(cookieParser())


app.use("/api/auth", authRouter)
app.use("/api/product", productRoute)
app.use("/api/cart", cartRoute)
app.get("/" ,(req,res) => {
    res.send("Radhe Radhe")
})
export default app  
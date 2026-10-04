import app from "./app/app.js"
import { connectDB } from "./config/db.js"



await connectDB()
app.listen(3000, (req,res) => {
    console.log("Server running on Port 3000")
})
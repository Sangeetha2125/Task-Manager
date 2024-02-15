const express = require("express")
const tasks = require("./routes/tasks")
const connectDB = require("./database/connect")

require("dotenv").config()
const app = express()
const port = 3001

app.use(express.json())
app.use("/api",tasks)

const start = async() => {
    try {
        await connectDB(process.env.MONGODB_URI)
        app.listen(port,console.log(`Server is listening on port ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()
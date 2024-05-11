import express from "express"
import cors from "cors"

const app=express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.listen(1234, ()=>{
    console.log("Listening on 1234.")
})  

app.get("/api/hello", (req,res)=> {
    res.send("Hello from Express!")
})

app.post("/api/world", (req,res)=> {
    res.json(`I received your POST request. This is what you sent me: ${req.body.msg}`)
})
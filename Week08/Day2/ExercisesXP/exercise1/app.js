import express from "express"

import { router } from "./routes/index.js"
const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.listen(5000, ()=> {
    console.log('running on 5000');
})

app.use('/',router)
app.use('/about', router)
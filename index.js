import express from "express";
import * as dotenv from "dotenv"
import cors from "cors"
import { dirname } from 'path';
import { fileURLToPath } from 'url';
// import uploadimg from "./controllers/uploadfile.controller.js"
import bodyParser from "body-parser";
import mongodb from "./db/mongodb/index.js"
import postRoutes from "./routes/postRoutes.js"


dotenv.config()
const PORT = process.env.SERVER_PORT || 8080
const app = express()

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(__dirname + '/public'));

// const corsOptions = {
//     origin:'*',                   //true
//     // credentials:true,            //access-control-allow-credentials:true
//     // optionSuccessStatus:200,
//  }
 const corsOptions = {
    origin:'*', 
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'x-client-key', 'x-client-token', 'x-client-secret', 'Authorization'],
    credentials: true
}
app.use(cors(corsOptions))
// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authortization');
//     res.setHeader('Acces-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
//     next()
// })

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json like body
app.use(bodyParser.json())

app.get("/", (req, res)=>{
    res.send("welcome to succo server")
})
app.use("/api/v1/post", postRoutes)


//app.use("/upload", uploadimg)


const startServer = async () => {
    try{
        mongodb.connect(process.env.MONGODB_URL)
    } catch(error){
        console.log(error)
    }

    app.listen(PORT, () => {
        console.log(`server running on port ${PORT}`)
    })
}

startServer();
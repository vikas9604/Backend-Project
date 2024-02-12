import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express()

app.use(cors({
    origin : process.env.CORS_ORIGIN, // change this to your domain name or IP address if you want to enable CORS for a specific domain
     credentials : true
}))


//major config
app.use(express.json({limit: '16kb'}));  // to support JSON-encoded bodies

app.use(express.urlencoded({ extended: true, limit: '16kb'}));  // to support URL-encoded bodies

app.use(express.static("public"))
app.use(cookieParser())


export { app }
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import TabunganRoute from "./routes/TabunganRoute.js";

const app = express();
mongoose.connect(process.env.MONGO_CONN_STR);

const db = mongoose.connection;
db.on('error',(error)=>console.log(error));
db.once('open',()=>console.log('Database Connected..'));

app.use(cors());
app.use(express.json());
app.use(TabunganRoute);

const port = process.env.PORT || 8080;
app.listen(port,()=>console.log('Server is listening on PORT :' + port));
import express, {Application, NextFunction, Request, Response} from "express";
import {connect} from "mongoose";
import bodyParser from "body-parser";
import {usuarioRouter} from "./router/usuarioRouter";

const app: Application = express();

app.use(bodyParser());

app.use("/usuarios", usuarioRouter);

app.use((req: Request, res:Response, next: NextFunction)=>{
    console.log(new Date());
    next();
})

app.use((req: Request, res: Response, next:NextFunction) =>{
    console.log("middleware", new Date());
    next();
})

app.listen(9191, async () => {
    await connect("mongodb://localhost:27017/iesp");
    console.log("servidor em pé")
});

export default app;

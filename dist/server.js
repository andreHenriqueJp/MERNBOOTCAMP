"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = require("mongoose");
const usuarioService_1 = require("./service/usuarioService");
const app = express_1.default();
app.get("/", async (req, res) => {
    //req.query ...?username=andre query = {username: "andre"}
    const usuarios = await usuarioService_1.UsuarioService.listar(req.query);
    res.json(usuarios);
});
app.listen(9090, async () => {
    await mongoose_1.connect("mongodb://localhost:27017/iesp");
    console.log("servidor em pé");
});
//# sourceMappingURL=server.js.map
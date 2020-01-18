"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var usuarioSchema = new mongoose_1.Schema({
    username: { type: String, required: true },
    password: { type: String }
});
exports.UsuarioModel = mongoose_1.model("usuarios", usuarioSchema);

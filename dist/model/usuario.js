"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const usuarioSchema = new mongoose_1.Schema({
    username: { type: String, required: true },
    password: { type: String }
});
exports.UsuarioModel = mongoose_1.model("usuarios", usuarioSchema);
//# sourceMappingURL=usuario.js.map
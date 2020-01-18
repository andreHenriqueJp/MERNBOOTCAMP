"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usuario_1 = require("../model/usuario");
class UsuarioService {
    static listar(query) {
        return usuario_1.UsuarioModel.find(query).exec();
    }
    static consultar(id) {
        return usuario_1.UsuarioModel.findById(id).exec();
    }
    static atualizar(id, usuario) {
        return usuario_1.UsuarioModel.update({ id: id }, usuario).exec();
    }
    static async remover(id) {
        await usuario_1.UsuarioModel.remove({ id: id }).exec();
    }
}
exports.UsuarioService = UsuarioService;
//# sourceMappingURL=usuarioService.js.map
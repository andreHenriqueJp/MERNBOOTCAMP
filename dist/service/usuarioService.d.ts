import { Usuario } from "../model/usuario";
export declare class UsuarioService {
    static listar(query: any): Promise<Usuario[]>;
    static consultar(id: string): Promise<Usuario | null>;
    static atualizar(id: string, usuario: Usuario): Promise<Usuario | null>;
    static remover(id: string): Promise<void>;
}

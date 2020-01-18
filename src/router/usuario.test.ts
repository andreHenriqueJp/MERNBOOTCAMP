import supertest from "supertest";
import mockingoose from "mockingoose";
import {UsuarioModel} from "../model/usuario";
import app from "../server";

test("[GET] /usuarios", async () =>{
    const mockusuarios = [{git
        _id: "5e23595f2aa23d659cf110bf",
        username: "andre",
        password: "123456"
    }];
    mockingoose(UsuarioModel).toReturn(mockusuarios, "find");
    const response = await supertest(app).get("/usuarios");
    expect(response.text).toBe(JSON.stringify(mockusuarios))
})

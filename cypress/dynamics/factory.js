
import faker from 'faker';

export default class Factory {

    static gerarProdutoBody(){
        
  
          }
    }
    static gerarUsuariosValido(){
        return {
            "nome": "Fulano da Silva",
            "email": "gabriel@qa.com",
            "password": "teste",
            "administrador": "true"
          }
          
    }
    static gerarUsuariosValidoNoAdm(){
        return {
            "nome": "Fulango da Silva",
            "email": "gabriel@qa.com",
            "password": "teste",
            "administrador": "false"
          }
    }

    static gerarUsuariosInvalido(){
        return {
            "nome": "Fulano da Silva",
            "email": "gabriel@qa.com",
            "password": "teste",
            "administrador": "true"
          }
    }

    static gerarUsuariosValidoStandart(){
        return {
            "nome": "Fulano da Silva",
            "email": "gabriel@qa.com",
            "password": "teste",
            "administrador": "true"
          }
}
}
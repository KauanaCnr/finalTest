/// <reference types="cypress" /> 
import CadastromMercado from "../pages/cadastro.pages";

describe("Teste de Cadastro  Ecommerce Mercado Online", () =>{
    beforeEach(() =>{
    CadastromMercado.abrirCadastro()
        
    })
    it('Varificar existecia de elementos na pagina de cadastro pessoa fisica', () =>{
       CadastromMercado.validarElementosPF()
    })
     it('Varificar existecia de elementos na pagina de cadastro pessoa juridica', () =>{
       CadastromMercado.validarElementosPJ()
    }) 
    it('Cadastrar novo usuario', () =>{
        CadastromMercado.cadastrarCliente()
    })
    it('Cadastrar um usuario já cadastrado', () =>{
        CadastromMercado.cadastrarClienteInvalido()
    })
    it('Cadastrar um usuario sem cpf', () =>{
       CadastromMercado.cadastrarClienteSemCPF()
    })
    it('Cadastrar um usuario sem nome', () =>{
      CadastromMercado.cadastrarUsuarioSemNome()
    })
    it('Cadastrar um usuario sem email', () =>{
       CadastromMercado.cadastrarUsuarioSemEmail()
    })
    it('Cadastrar um usuario sem senha', () =>{
       CadastromMercado.cadastrarUsuarioSemSenha()
    })
    it('Cadastrar um usuario sem prencher os campos', () =>{
       CadastromMercado.cadastrarUsuarioComCamposVazios()
    })
    it('Cadastrar um usuario sem cep', () =>{
       CadastromMercado.cadastrarSemCEP()
    })
    it('Cadastrar um usuario sem endereço', () =>{
      CadastromMercado.cadastrarSemEndereço()
    })
    it('Cadastrar um usuario sem numero', () =>{
       CadastromMercado.cadastrarSemNumero()
    })
    it('Cadastrar um usuario sem bairro', () =>{
       CadastromMercado.cadastrarSemBairro()
    })
    it('Cadastrar um usuario sem cidade', () =>{
       CadastromMercado.cadastrarSemCidade()
    })
    it('Cadastrar um usuario sem estado', () =>{
       CadastromMercado.cadastrarSemEstado()
    })
  
    
     
})

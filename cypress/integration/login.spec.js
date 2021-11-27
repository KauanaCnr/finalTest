
/// <reference types="cypress" /> 
import LoginMercado from '../pages/login.pages.js'
describe("Teste de Login Ecommerce Mercado Online", () =>{
    beforeEach(() =>{
        LoginMercado.abrirlogin()
    })

    it('Verificar existencia e visibilidade de elementos pagina login  Ecommerce Mercado Online', () =>{
      LoginMercado.validarElementos()
    })
  
     it('Verificar existencia e visibilidade de elementos pagina login e fazer o mesmo no  Ecommerce Mercado Online', () =>{
      LoginMercado.validarLogin()
    })

    it('verificar a existencia da mensagem de erro apos um login sem email', () =>{
        LoginMercado.validarLoginIncorreto('Dados inválidos, digite novamente!')
    })
    it('verificar a existencia da mensagem de erro apos um login sem senha', () =>{
        LoginMercado.validarLoginIncorreto('Autenticação incorreta.')
    }) 
  
})

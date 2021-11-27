/// <reference types="cypress" /> 
import AdicionarCarrinho from '../page/carrinho.pages'

describe("Teste de adicionar produtos ao carinho e finalizar compras  Ecommerce Mercado Online", () =>{
    beforeEach(() =>{
    AdicionarCarrinho.abrirFrutas()
        
    })
    it('Verificar existecia de elementos na pagina frutas', () =>{
       AdicionarCarrinho.validarElementosFrutas()
    })
     it('Adicionar os primeiros produtos ao carrinho', () =>{
       CadastromMercado.adicionarFrutas()
    }) 
    it('Aumentar a quantiddade de um dos produtos', () =>{
        AdicionarCarrinho.adicionarMaisGramas()
    })
    it('Diminuir quantidade de um dos produtos', () =>{
        AdicionarCarrinho.diminuirGramas()
    })
    it('Abrir e verificar existecia de elementos na aba carrinho', () =>{
      AdicionarCarrinho.abrirCarrinho()
      AdicionarCarrinho.validarElementosCarrinho()
    })
    it('Finalizar compra na pagina carrinho', () =>{
      AdicionarCarrinho.abrirCarrinho()
      AdicionarCarrinho.finalizarCompras()

    })
    it('Excluir um item da pagina carinho', () =>{
      AdicionarCarrinho.abrirCarrinho()
      AdicionarCarrinho.excluirItemCarrinho()
    })
    it('Limpar todo o carrinho', () =>{
     AdicionarCarrinho.abrirCarrinho()
      AdicionarCarrinho.liparCarrinho()
    })
    it('Fechar o carrinho', () =>{
      AdicionarCarrinho.abrirCarrinho()
      AdicionarCarrinho.fecharCarrinho()
    })
    
    
     
})

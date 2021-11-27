import Base from './_base.page'
import FRUTAS from '../components/ofertas.elements'
import CARRINHO from '../components/carrinho.elements'

export default class AdicionarCarrinho extends Base {

  static abrirFrutas(){
  	cy.visitar()
  	super.clickOnElement(BTN_FRUTAS)
        super.validarUrl('/frutas')
  }
  static abrirCarrinho(){
        super.clickOnElement(BTN_CARRINHO)

  }

 static validarElementosFrutas(){
        super.validarExistenciaEVisibilidadeDoElemento(BTN_CARRINHO)
        super.validarExistenciaEVisibilidadeDoElemento(BTN_FRUTAS)
        super.validarExistenciaEVisibilidadeDoElemento(BTN_CITRICAS)
        super.validarExistenciaEVisibilidadeDoElemento(BTN_RARAS)
        super.validarExistenciaEVisibilidadeDoElemento(BTN_SALADA)
        super.validarExistenciaEVisibilidadeDoElemento(BTN_ORGANICAS)
        super.validarExistenciaEVisibilidadeDoElemento(BTN_VERMELHAS)
        super.validarExistenciaEVisibilidadeDoElemento(BTN_AMARELAS)
        super.validarExistenciaEVisibilidadeDoElemento(BTN_SECAS)
        super.validarExistenciaEVisibilidadeDoElemento(BTN_ESTACAO)
        super.validarExistenciaEVisibilidadeDoElemento(BTN_ADICIONAR)     
                   
    }
 static validarElementosCarrinho(){
        super.validarExistenciaEVisibilidadeDoElemento(BTN_CLOSE)
        super.validarExistenciaEVisibilidadeDoElemento(INP_BUSCA)
        super.validarExistenciaEVisibilidadeDoElemento(BTN_FINALIZA)
        super.validarExistenciaEVisibilidadeDoElemento(BTN_LIMPA)
        super.validarExistenciaEVisibilidadeDoElemento(BTN_DELETE)              
    }

 static adicionarFrutas(){
        super.clickOnElement(BTN_ADICIONAR)
        super.validarExistenciaEVisibilidadeDoElemento(BTN_MAIS)
        super.validarExistenciaEVisibilidadeDoElemento(BTN_MENOS)
        super.clickOnElement(BTN_ADICIONAR2)
        super.validarExistenciaEVisibilidadeDoElemento(BTN_MAIS)
        super.validarExistenciaEVisibilidadeDoElemento(BTN_MENOS)
  }
 static adicionarMaisGramas(){

        super.clickOnElement(BTN_MAIS)
        super.clickOnElement(BTN_MAIS)
        super.clickOnElement(BTN_MAIS)

 }

  static diminuirGramas(){

        super.clickOnElement(BTN_MENOS)
     

  }

  static finalizarCompras(){
        super.clickOnElement(BTN_FINALIZA)
        super.validarUrl('/checkout')
  }

  static excluirItemCarrinho(){
        super.clickOnElement(BTN_DELETE)
  }
  static limparCarrinho(){
        super.clickOnElement(BTN_LIMPA)

  }
   static fecharCarrinho(){
        super.clickOnElement(BTN_CLOSE)
        super.validarUrl('/frutas')

  }


}
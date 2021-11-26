import Base from './_base.page'
import FRUTAS from '../components/ofertas.elements'



export default class AdicionarCarrinho extends Base {

  	static abrirFrutas(){
  		cy.visitar()
  		super.clickOnElement(BTN_FRUTAS)
        super.validarUrl('/frutas')
  	}
    static validarElementos(){
     
    }

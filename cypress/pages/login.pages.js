import Base from './_base.page'
import PAGE_LOGIN from '../components/login.elements'
import LOGIN from '../components/login.elements'

export default class LoginMercado extends Base {

    static abrirLogin(){
        cy.visitar()
        super.clickOnElement(BTN_ENTRAR)
        super.validarUrl('/central-do-cliente')
}
    static validarElementosInicial (){
        super.validarExistenciaEVisibilidadeDoElemento(BTN_LOGIN)
        super.validarExistenciaEVisibilidadeDoElemento(INP_EMAIL)
        super.validarExistenciaEVisibilidadeDoElemento(BTN_CADASTRE)

    }
    
    static validarLogin(){
        super.clickOnElement(BTN_LOGIN)
        super.validarExistenciaEVisibilidadeDoElemento(INP_EMAILLOGIN) 
        super.typeValue(INP_EMAILLOGIN,'siclano@qa.com' )
        super.clickOnElement(BTN_CONTINUAR)
        super.validarExistenciaEVisibilidadeDoElemento(INP_SENHALOGIN) 
        super.typeValue(INP_SENHALOGIN,'d5fZGQ7J' )
        super.clickOnElement(BTN_CONTINUAR)
        super.validarUrl('/my-account')
       
    }
    static validarLoginIncorreto(mensagem){
        super.clickOnElement(BTN_LOGIN)
        super.validarExistenciaEVisibilidadeDoElemento(INP_EMAILLOGIN) 
        super.typeValue(INP_EMAILLOGIN,'siclano@qa.com' )
        super.clickOnElement(BTN_CONTINUAR)
        super.validarExistenciaEVisibilidadeDoElemento(ALERT_LOGIN)
        super.validateElementText(ALERT_LOGIN, mensagem)
    }
    static validarLoginIncorreto2(){
        super.clickOnElement(BTN_LOGIN)
        super.validarExistenciaEVisibilidadeDoElemento(INP_EMAILLOGIN) 
        super.typeValue(INP_EMAILLOGIN,'siclano@qa.com' )
        super.clickOnElement(BTN_CONTINUAR)
        super.validarExistenciaEVisibilidadeDoElemento(INP_SENHALOGIN) 
        super.typeValue(INP_SENHALOGIN,'' )
        super.clickOnElement(BTN_CONTINUAR)
        super.validarExistenciaEVisibilidadeDoElemento(ALERT_SENHA)
        super.validateElementText(ALERT_SENHA, mensagem)
    }
    
}

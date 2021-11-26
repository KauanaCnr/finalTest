import Base from './_base.page'
import CADASTRO_PJ from '../components/cadastro.elements'
import CADASTRO_PF from '../components/cadastro.elements'
import CADASTRO from '../components/cadastro.elements'
import CADASTRO_ENTREGA from '../components/cadastro.elements'


export default class CadastromMercado extends Base {

  	static abrirCadastro(){
  		cy.visitar()
  		super.clickOnElement(BTN_CADASTRO)
        super.validarUrl('/cadastro')
  	}
    static validarElementosPJ(){
        super.validarExistenciaEVisibilidadeDoElemento(FORM_FISICA)
        super.validarExistenciaEVisibilidadeDoElemento(BTN_PFISICA)
        super.validarExistenciaEVisibilidadeDoElemento(BTN_AVANCAR)
        super.validarExistenciaEVisibilidadeDoElemento(INP_NOMECLIENTE)
        super.validarExistenciaEVisibilidadeDoElemento(INP_DATANASC)
        super.validarExistenciaEVisibilidadeDoElemento(INP_CPF)
        super.validarExistenciaEVisibilidadeDoElemento(INP_TFIXO)
        super.validarExistenciaEVisibilidadeDoElemento(INP_TCELULAR)
        super.validarExistenciaEVisibilidadeDoElemento(INP_EMAIL)
        super.validarExistenciaEVisibilidadeDoElemento(INP_ENOVAMENTE)
        super.validarExistenciaEVisibilidadeDoElemento(BTN_PROMOEMAIL)
        super.validarExistenciaEVisibilidadeDoElemento(INP_SENHA)
        super.validarExistenciaEVisibilidadeDoElemento(INP_SNOVAMENTE)
        super.validarExistenciaEVisibilidadeDoElemento(INP_CEP1)
        super.validarExistenciaEVisibilidadeDoElemento(INP_CEP2)
        super.validarExistenciaEVisibilidadeDoElemento(INP_ENDERECO)
        super.validarExistenciaEVisibilidadeDoElemento(INP_NUMERO)
        super.validarExistenciaEVisibilidadeDoElemento(INP_COMPLEMENTO)
        super.validarExistenciaEVisibilidadeDoElemento(INP_BAIRRO)
        super.validarExistenciaEVisibilidadeDoElemento(INP_CIDADE)
        super.validarExistenciaEVisibilidadeDoElemento(INP_ESTADO)
        super.validarExistenciaEVisibilidadeDoElemento(INP_PAIS)
        super.validarExistenciaEVisibilidadeDoElemento(CHECKBOX)   
    }
     static validarElementosPF(){
     	super.clickOnElement(BTN_PJ)
        super.validarExistenciaEVisibilidadeDoElemento(FORM_PJ)
        super.validarExistenciaEVisibilidadeDoElemento(BTN_PJ)
        super.validarExistenciaEVisibilidadeDoElemento(BTN_AVANCARPJ)
        super.validarExistenciaEVisibilidadeDoElemento(INP_NOMEPJ)
        super.validarExistenciaEVisibilidadeDoElemento(INP_DATANASCPJ)
        super.validarExistenciaEVisibilidadeDoElemento(INP_CPFPJ)
        super.validarExistenciaEVisibilidadeDoElemento(INP_TFIXOPJ)
        super.validarExistenciaEVisibilidadeDoElemento(INP_TCELULARPJ)
        super.validarExistenciaEVisibilidadeDoElemento(INP_EMAILPJ)
        super.validarExistenciaEVisibilidadeDoElemento(INP_ENOVAMENTEPJ)
        super.validarExistenciaEVisibilidadeDoElemento(BTN_PROMOEMAILPJ)
        super.validarExistenciaEVisibilidadeDoElemento(INP_SENHAPJ)
        super.validarExistenciaEVisibilidadeDoElemento(INP_SNOVAMENTEPJ)
        super.validarExistenciaEVisibilidadeDoElemento(INP_RAZAOSOCIAL)
        super.validarExistenciaEVisibilidadeDoElemento(INP_IESTADUAL)

    }
    static cadastrarCliente(){
        super.clickOnElement(BTN_PFISICA)
        super.typeValue(INP_NOMECLIENTE, `Fulano  Souza`)
        super.typeValue(INP_CPF, 34778493028)
        super.typeValue(INP_TCELULAR , 22975894187)
        super.typeValue(INP_EMAIL, `fulanosouza@qa.com`)
        super.typeValue(INP_ENOVAMENTE, 'fulanosouza@qa.com')
        super.clickOnElement(BTN_PROMOEMAIL)
        super.typeValue(INP_SENHA, `cPBsi7dW`)
        super.typeValue(INP_SNOVAMENTE, 'cPBsi7dW')
        super.typeValue(INP_CEP1,13280)
        super.typeValue(INP_CEP2,971)
        super.typeValue(INP_ENDERECO,'Rua Primeiro de Maio')
        super.typeValue(INP_NUMERO,214)
        super.typeValue(INP_COMPLEMENTO,214)
        super.typeValue(INP_BAIRRO,'Capela')
        super.typeValue(INP_CIDADE,'Vinhedo')
        super.typeValue(INP_ESTADO,'São Paulo')
        super.typeValue(INP_PAIS, 'Brasil')
        super.clickOnElement(BTN_AVANCAR)
        super.validarUrl('/loja')
    }

    static cadastrarClienteInvalido(){
        
         super.clickOnElement(BTN_PFISICA)
        super.typeValue(INP_NOMECLIENTE, `Fulano  Souza`)
        super.typeValue(INP_CPF, 34778493028)
        super.typeValue(INP_TCELULAR , 22975894187)
        super.typeValue(INP_EMAIL, `fulanosouza@qa.com`)
        super.typeValue(INP_ENOVAMENTE, 'fulanosouza@qa.com')
        super.clickOnElement(BTN_PROMOEMAIL)
        super.typeValue(INP_SENHA, `cPBsi7dW`)
        super.typeValue(INP_SNOVAMENTE, 'cPBsi7dW')
        super.typeValue(INP_CEP1,13280)
        super.typeValue(INP_CEP2,971)
        super.typeValue(INP_ENDERECO,'Rua Primeiro de Maio')
        super.typeValue(INP_NUMERO,214)
        super.typeValue(INP_COMPLEMENTO,214)
        super.typeValue(INP_BAIRRO,'Capela')
        super.typeValue(INP_CIDADE,'Vinhedo')
        super.typeValue(INP_ESTADO,'São Paulo')
        super.typeValue(INP_PAIS, 'Brasil')
        super.clickOnElement(BTN_AVANCAR)
        super.validarExistenciaEVisibilidadeDoElemento(ALERT_INVALIDO)

    }

      static cadastrarClienteSemCPF(){
        
         super.clickOnElement(BTN_PFISICA)
        super.typeValue(INP_NOMECLIENTE, `$Fulano  Souza`)
        super.typeValue(INP_CPF,`` )
        super.typeValue(INP_TCELULAR , 22975894187)
        super.typeValue(INP_EMAIL, `fulanosouza@qa.com`)
        super.typeValue(INP_ENOVAMENTE, 'fulanosouza@qa.com')
        super.clickOnElement(BTN_PROMOEMAIL)
        super.typeValue(INP_SENHA, `cPBsi7dW`)
        super.typeValue(INP_SNOVAMENTE, 'cPBsi7dW')
        super.typeValue(INP_CEP1,13280)
        super.typeValue(INP_CEP2,971)
        super.typeValue(INP_ENDERECO,'Rua Primeiro de Maio')
        super.typeValue(INP_NUMERO,214)
        super.typeValue(INP_COMPLEMENTO,214)
        super.typeValue(INP_BAIRRO,'Capela')
        super.typeValue(INP_CIDADE,'Vinhedo')
        super.typeValue(INP_ESTADO,'São Paulo')
        super.typeValue(INP_PAIS, 'Brasil')
        super.clickOnElement(BTN_AVANCAR)
        super.validarExistenciaEVisibilidadeDoElemento(ALERT_CPF)
                
       

    }
   
    static cadastrarUsuarioSemNome(){
        
        s super.clickOnElement(BTN_PFISICA)
        super.typeValue(INP_NOMECLIENTE, ``)
        super.typeValue(INP_CPF, 34778493028)
        super.typeValue(INP_TCELULAR , 22975894187)
        super.typeValue(INP_EMAIL, `fulanosouza@qa.com`)
        super.typeValue(INP_ENOVAMENTE, 'fulanosouza@qa.com')
        super.clickOnElement(BTN_PROMOEMAIL)
        super.typeValue(INP_SENHA, `cPBsi7dW`)
        super.typeValue(INP_SNOVAMENTE, 'cPBsi7dW')
        super.clickOnElement(BTN_AVANCAR)
        super.typeValue(INP_CEP1,13280)
        super.typeValue(INP_CEP2,971)
        super.typeValue(INP_ENDERECO,'Rua Primeiro de Maio')
        super.typeValue(INP_NUMERO,214)
        super.typeValue(INP_COMPLEMENTO,214)
        super.typeValue(INP_BAIRRO,'Capela')
        super.typeValue(INP_CIDADE,'Vinhedo')
        super.typeValue(INP_ESTADO,'São Paulo')
        super.typeValue(INP_PAIS, 'Brasil')
        super.validarExistenciaEVisibilidadeDoElemento(ALERT_NOME)
}
    
    static cadastrarUsuarioSemEmail(){  ALERT_EMAIL        

         super.clickOnElement(BTN_PFISICA)
        super.typeValue(INP_NOMECLIENTE, `$Fulano  Souza`)
        super.typeValue(INP_CPF, 34778493028)
        super.typeValue(INP_TCELULAR , 22975894187)
        super.typeValue(INP_EMAIL, ``)
        super.typeValue(INP_ENOVAMENTE, '')
        super.clickOnElement(BTN_PROMOEMAIL)
        super.typeValue(INP_SENHA, `cPBsi7dW`)
        super.typeValue(INP_SNOVAMENTE, 'cPBsi7dW')
        super.typeValue(INP_CEP1,13280)
        super.typeValue(INP_CEP2,971)
        super.typeValue(INP_ENDERECO,'Rua Primeiro de Maio')
        super.typeValue(INP_NUMERO,214)
        super.typeValue(INP_COMPLEMENTO,214)
        super.typeValue(INP_BAIRRO,'Capela')
        super.typeValue(INP_CIDADE,'Vinhedo')
        super.typeValue(INP_ESTADO,'São Paulo')
        super.typeValue(INP_PAIS, 'Brasil')
        super.clickOnElement(BTN_AVANCAR)
        super.validarExistenciaEVisibilidadeDoElemento(ALERT_EMAIL)
       super.validarExistenciaEVisibilidadeDoElemento( ALERT_EMAIL2)
}
    
    static cadastrarUsuarioSemSenha(){
        super.clickOnElement(BTN_PFISICA)
        super.typeValue(INP_NOMECLIENTE, `$Fulano  Souza`)
        super.typeValue(INP_CPF, 34778493028)
        super.typeValue(INP_TCELULAR , 22975894187)
        super.typeValue(INP_EMAIL, `fulanosouza@qa.com`)
        super.typeValue(INP_ENOVAMENTE, 'fulanosouza@qa.com')
        super.clickOnElement(BTN_PROMOEMAIL)
        super.typeValue(INP_SENHA, ``)
        super.typeValue(INP_SNOVAMENTE, '')
        super.typeValue(INP_CEP1,13280)
        super.typeValue(INP_CEP2,971)
        super.typeValue(INP_ENDERECO,'Rua Primeiro de Maio')
        super.typeValue(INP_NUMERO,214)
        super.typeValue(INP_COMPLEMENTO,214)
        super.typeValue(INP_BAIRRO,'Capela')
        super.typeValue(INP_CIDADE,'Vinhedo')
        super.typeValue(INP_ESTADO,'São Paulo')
        super.typeValue(INP_PAIS, 'Brasil')
        super.clickOnElement(BTN_AVANCAR)
       super.validarExistenciaEVisibilidadeDoElemento(ALERT_SENHA)
       super.validarExistenciaEVisibilidadeDoElemento( ALERT_SENHA)
}          
    
   

    
    static cadastrarUsuarioComCamposVazios(){

         super.clickOnElement(BTN_PFISICA)
        super.typeValue(INP_NOMECLIENTE, ``)
        super.typeValue(INP_CPF, ``)
        super.typeValue(INP_TCELULAR , ``)
        super.typeValue(INP_EMAIL, ``)
        super.typeValue(INP_ENOVAMENTE, '')
        super.clickOnElement(BTN_PROMOEMAIL)
        super.typeValue(INP_SENHA, ``)
        super.typeValue(INP_SNOVAMENTE, '')
        super.typeValue(INP_CEP1,'')
        super.typeValue(INP_CEP2,'')
        super.typeValue(INP_ENDERECO,'')
        super.typeValue(INP_NUMERO,'')
        super.typeValue(INP_COMPLEMENTO,'')
        super.typeValue(INP_BAIRRO,'')
        super.typeValue(INP_CIDADE,'')
        super.typeValue(INP_ESTADO,'')
        super.typeValue(INP_PAIS, '')
        super.clickOnElement(BTN_AVANCAR)
        super.validarExistenciaEVisibilidadeDoElemento(ALERT_INVALIDO)
    }
    
  static cadastrarSemCEP(){
        super.clickOnElement(BTN_PFISICA)
        super.typeValue(INP_NOMECLIENTE, `Fulano  Souza`)
        super.typeValue(INP_CPF, 34778493028)
        super.typeValue(INP_TCELULAR , 22975894187)
        super.typeValue(INP_EMAIL, `fulanosouza@qa.com`)
        super.typeValue(INP_ENOVAMENTE, 'fulanosouza@qa.com')
        super.clickOnElement(BTN_PROMOEMAIL)
        super.typeValue(INP_SENHA, `cPBsi7dW`)
        super.typeValue(INP_SNOVAMENTE, 'cPBsi7dW')
        super.typeValue(INP_CEP1,'')
        super.typeValue(INP_CEP2,'')
        super.typeValue(INP_ENDERECO,'Rua Primeiro de Maio')
        super.typeValue(INP_NUMERO,214)
        super.typeValue(INP_COMPLEMENTO,214)
        super.typeValue(INP_BAIRRO,'Capela')
        super.typeValue(INP_CIDADE,'Vinhedo')
        super.typeValue(INP_ESTADO,'São Paulo')
        super.typeValue(INP_PAIS, 'Brasil')
        super.clickOnElement(BTN_AVANCAR)
        super.validarExistenciaEVisibilidadeDoElemento(ALERT_CEP1)
        super.validarExistenciaEVisibilidadeDoElemento(ALERT_CEP2)
             
	       
	ALERT_ENDERECO    
	ALERT_NUMERO     
	ALERT_BAIRRO     
	ALERT_CIDADE      
	ALERT_ESTADO      
   }
  
   static cadastrarSemEndereço(){
        super.clickOnElement(BTN_PFISICA)
        super.typeValue(INP_NOMECLIENTE, `Fulano  Souza`)
        super.typeValue(INP_CPF, 34778493028)
        super.typeValue(INP_TCELULAR , 22975894187)
        super.typeValue(INP_EMAIL, `fulanosouza@qa.com`)
        super.typeValue(INP_ENOVAMENTE, 'fulanosouza@qa.com')
        super.clickOnElement(BTN_PROMOEMAIL)
        super.typeValue(INP_SENHA, `cPBsi7dW`)
        super.typeValue(INP_SNOVAMENTE, 'cPBsi7dW')
        super.typeValue(INP_CEP1,13280)
        super.typeValue(INP_CEP2,971)
        super.typeValue(INP_ENDERECO,'')
        super.typeValue(INP_NUMERO,214)
        super.typeValue(INP_COMPLEMENTO,214)
        super.typeValue(INP_BAIRRO,'Capela')
        super.typeValue(INP_CIDADE,'Vinhedo')
        super.typeValue(INP_ESTADO,'São Paulo')
        super.typeValue(INP_PAIS, 'Brasil')
        super.clickOnElement(BTN_AVANCAR)
        super.validarExistenciaEVisibilidadeDoElemento(ALERT_ENDERECO)            
	ALERT_NUMERO     
	ALERT_BAIRRO     
	ALERT_CIDADE      
	ALERT_ESTADO   
    }
  
   static cadastrarSemNumero(){
        super.clickOnElement(BTN_PFISICA)
        super.typeValue(INP_NOMECLIENTE, `Fulano  Souza`)
        super.typeValue(INP_CPF, 34778493028)
        super.typeValue(INP_TCELULAR , 22975894187)
        super.typeValue(INP_EMAIL, `fulanosouza@qa.com`)
        super.typeValue(INP_ENOVAMENTE, 'fulanosouza@qa.com')
        super.clickOnElement(BTN_PROMOEMAIL)
        super.typeValue(INP_SENHA, `cPBsi7dW`)
        super.typeValue(INP_SNOVAMENTE, 'cPBsi7dW')
        super.typeValue(INP_CEP1,13280)
        super.typeValue(INP_CEP2,971)
        super.typeValue(INP_ENDERECO,'Rua Primeiro de Maio')
        super.typeValue(INP_NUMERO,'')
        super.typeValue(INP_COMPLEMENTO,214)
        super.typeValue(INP_BAIRRO,'Capela')
        super.typeValue(INP_CIDADE,'Vinhedo')
        super.typeValue(INP_ESTADO,'São Paulo')
        super.typeValue(INP_PAIS, 'Brasil')
        super.clickOnElement(BTN_AVANCAR)
        super.validarExistenciaEVisibilidadeDoElemento(ALERT_NUMERO )	    
	   
	ALERT_CIDADE      
	ALERT_ESTADO   
    }
   static cadastrarSemBairro(){
        super.clickOnElement(BTN_PFISICA)
        super.typeValue(INP_NOMECLIENTE, `Fulano  Souza`)
        super.typeValue(INP_CPF, 34778493028)
        super.typeValue(INP_TCELULAR , 22975894187)
        super.typeValue(INP_EMAIL, `fulanosouza@qa.com`)
        super.typeValue(INP_ENOVAMENTE, 'fulanosouza@qa.com')
        super.clickOnElement(BTN_PROMOEMAIL)
        super.typeValue(INP_SENHA, `cPBsi7dW`)
        super.typeValue(INP_SNOVAMENTE, 'cPBsi7dW')
        super.typeValue(INP_CEP1,13280)
        super.typeValue(INP_CEP2,971)
        super.typeValue(INP_ENDERECO,'Rua Primeiro de Maio')
        super.typeValue(INP_NUMERO,214)
        super.typeValue(INP_COMPLEMENTO,214)
        super.typeValue(INP_BAIRRO,'')
        super.typeValue(INP_CIDADE,'Vinhedo')
        super.typeValue(INP_ESTADO,'São Paulo')
        super.typeValue(INP_PAIS, 'Brasil')
        super.clickOnElement(BTN_AVANCAR)
        super.validarExistenciaEVisibilidadeDoElemento(ALERT_BAIRRO)
    }
   static cadastrarSemCidade(){
        super.clickOnElement(BTN_PFISICA)
        super.typeValue(INP_NOMECLIENTE, `Fulano  Souza`)
        super.typeValue(INP_CPF, 34778493028)
        super.typeValue(INP_TCELULAR , 22975894187)
        super.typeValue(INP_EMAIL, `fulanosouza@qa.com`)
        super.typeValue(INP_ENOVAMENTE, 'fulanosouza@qa.com')
        super.clickOnElement(BTN_PROMOEMAIL)
        super.typeValue(INP_SENHA, `cPBsi7dW`)
        super.typeValue(INP_SNOVAMENTE, 'cPBsi7dW')
        super.typeValue(INP_CEP1,13280)
        super.typeValue(INP_CEP2,971)
        super.typeValue(INP_ENDERECO,'Rua Primeiro de Maio')
        super.typeValue(INP_NUMERO,214)
        super.typeValue(INP_COMPLEMENTO,214)
        super.typeValue(INP_BAIRRO,'Capela')
        super.typeValue(INP_CIDADE,'')
        super.typeValue(INP_ESTADO,'São Paulo')
        super.typeValue(INP_PAIS, 'Brasil')
        super.clickOnElement(BTN_AVANCAR)
        super.validarExistenciaEVisibilidadeDoElemento(ALERT_CIDADE)   
 
    }
   static cadastrarSemEstado(){
        super.clickOnElement(BTN_PFISICA)
        super.typeValue(INP_NOMECLIENTE, `Fulano  Souza`)
        super.typeValue(INP_CPF, 34778493028)
        super.typeValue(INP_TCELULAR , 22975894187)
        super.typeValue(INP_EMAIL, `fulanosouza@qa.com`)
        super.typeValue(INP_ENOVAMENTE, 'fulanosouza@qa.com')
        super.clickOnElement(BTN_PROMOEMAIL)
        super.typeValue(INP_SENHA, `cPBsi7dW`)
        super.typeValue(INP_SNOVAMENTE, 'cPBsi7dW')
        super.typeValue(INP_CEP1,13280)
        super.typeValue(INP_CEP2,971)
        super.typeValue(INP_ENDERECO,'Rua Primeiro de Maio')
        super.typeValue(INP_NUMERO,214)
        super.typeValue(INP_COMPLEMENTO,214)
        super.typeValue(INP_BAIRRO,'Capela')
        super.typeValue(INP_CIDADE,'Vinhedo')
        super.typeValue(INP_ESTADO,'')
        super.typeValue(INP_PAIS, 'Brasil')
        super.clickOnElement(BTN_AVANCAR)
        super.validarExistenciaEVisibilidadeDoElemento(ALERT_ESTADO )
    }
}

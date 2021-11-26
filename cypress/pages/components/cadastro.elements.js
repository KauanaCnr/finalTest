export const CADASTRO = {
	BTN_CADASTRO        : '//*[@id="header"]/div/div/div/div[3]/div/ul/li[2]/span/a'
}

export const CADASTRO_PF = {
	INP_NOMECLIENTE     : '//*[@id="pf_nome_cliente"]',
	INP_DATANASC        : '//*[@id="pf_data_nascimento"]',
	INP_CPF             : '//*[@id="pf_cpf_cliente"]',
	INP_TFIXO           : '//*[@id="telefone_cliente"]'
	INP_TCELULAR        : '//*[@id="telefone_cliente_2"]',
	INP_EMAIL           : '//*[@id="email_cliente"]',
	INP_ENOVAMENTE      : '//*[@id="email_cliente2"]',
	BTN_PROMOEMAIL      : '//*[@id="email"]',
	INP_SENHA           : '//*[@id="senha_cliente"]',
	INP_SNOVAMENTE      : '//*[@id="senha_cliente2"]',
	BTN_AVANCAR         : '//*[@id="frm2"]/div[3]/button',
	BTN_PFISICA         : '//*[@id="PessoaFisica"]/a',
	FORM_FISICA         : '//*[@id="frm2"]/div[1]',
	ALERT_NOME          : '//*[@id="pf_nome_cliente_erro"]',
	ALERT_CPF           : '//*[@id="pf_cpf_cliente_erro"]',
    ALERT_EMAIL         : '//*[@id="email_cliente_erro"]',
    ALERT_SENHA         : '//*[@id="senha_cliente_erro"]',
    ALERT_EMAIL2        : '//*[@id="email_cliente2_erro"]',
    ALERT_SENHA2        : '//*[@id="senha_cliente2_erro"]',
    ALERT_TELEFONE      : '//*[@id="telefone_cliente_2_erro"]',
    ALERT_INVALIDO      : '//*[@id="main"]/div[2]/div/p',
}

export const CADASTRO_PJ = {
	INP_RAZAOSOCIAL      : '//*[@id="razao_social"]',
	INP_IESTADUAL        : '//*[@id="ie"]',
	INP_NOMEPJ           : '//*[@id="pj_nome_cliente"]',
	INP_CPFPJ            : '//*[@id="pj_cpf_cliente"]',
	INP_DATANASC         : '//*[@id="pj_data_nascimento"]',
	INP_CNPJ             : '//*[@id="cnpj"]',
	INP_TFIXOPJ          : '//*[@id="telefone_cliente"]',
	INP_TCELULARPJ       : '//*[@id="telefone_cliente_2"]',
	INP_EMAILPJ          : '//*[@id="email_cliente"]',
	INP_ENOVAMENTEPJ     : '//*[@id="email_cliente2"]',
	BTN_PROMOEMAILPJ     : '//*[@id="email"]',
	INP_SENHAPJ          : '//*[@id="senha_cliente"]',
	INP_SNOVAMENTEPJ     : '//*[@id="senha_cliente2"]',
	BTN_AVANCARPJ        : '//*[@id="frm2"]/div[3]/button/span',
	BTN_PJ               : '//*[@id="PessoaJuridica"]/a',
	FORM_PJ              : '//*[@id="frm2"]'    
}
export const CADASTRO_ENTREGA ={
	INP_CEP1         : '//*[@id="span_cep_nacional"]'
	INP_ENDERECO    : ''
	INP_NUMERO      : ''
	INP_COMPLEMENTO : '' 
	INP_BAIRRO      : ''
	INP_CIDADE      : ''
	INP_ESTADO      : ''
	INP_PAIS        : ''
	CHECKBOX        : ''
	

}
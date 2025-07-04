import { AbstractPage } from './AbstractPage';
import {Page} from '@playwright/test'

export class PaginaLogin extends AbstractPage{

    readonly campoLogin = '#user-name';
    readonly campoSenha = '#password';
    readonly botaoLogin = '#login-button';
    readonly mensagemDeErro = '[data-test="error"]';

    constructor(page: Page){
        super(page);
    }

    async preencherLogin(username: string){
        await this.page.fill(this.campoLogin, username)
    }
    
    async preencherSenha(password: string){
        await this.page.fill(this.campoSenha, password)
    }

    async clicarBotaoLogin(){
        await this.page.click(this.botaoLogin)
    }

    verificarMensagemErro(){
        return this.page.locator(this.mensagemDeErro)
    }

    async logarComoStandardUser(){
        await this.preencherLogin('standard_user')
        await this.preencherSenha('secret_sauce')
        await this.clicarBotaoLogin()
    }

    async goto(){
        await this.page.goto('https://www.saucedemo.com/');
    }

}
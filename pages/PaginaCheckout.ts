import {Page} from '@playwright/test'
import { AbstractPage } from './AbstractPage';

export class PaginaCheckout extends AbstractPage{
    
    readonly campoFirstName = '#first-name';
    readonly campoLastName = '#last-name';
    readonly campoZipPostalCode = '#postal-code'
    readonly botaoContinue = '#continue'
    
    constructor(page: Page){
        super(page);
    }

    async preencherFirstName(firstName: string){
        await this.page.fill(this.campoFirstName, firstName)
    }

    async preencherLastName(lastName: string){
        await this.page.fill(this.campoLastName, lastName)
    }

    async preencherZipPostalCode(zip: string){
        await this.page.fill(this.campoZipPostalCode, zip)
    }

    async preencherInformacoesDeCheckout(){
        await this.preencherFirstName('Tiago')
        await this.preencherLastName('Perrelli')
        await this.preencherZipPostalCode('52050130')
    }

    async clicarBotaoContinue(){
        await this.page.click(this.botaoContinue)
    }
}
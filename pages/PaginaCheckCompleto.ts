import {Page} from '@playwright/test'
import { AbstractPage } from './AbstractPage';

export class PaginaCheckCompleto extends AbstractPage{

    readonly mensagemDeFinalizacao = '[data-test="complete-header"]'

    constructor(page: Page){
        super(page);
    }

    verificarMensagemDeFinalizacao(){
        return this.page.locator(this.mensagemDeFinalizacao)
    }
}
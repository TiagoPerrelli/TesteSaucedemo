import { AbstractPage } from './AbstractPage';
import {Page} from '@playwright/test'

export class PaginaOverview extends AbstractPage{
    readonly botaoFinish = '#finish'
    
    constructor(page: Page){
        super(page);
    }

    async clicarbotaoFinish(){
        await this.page.click(this.botaoFinish)
        console.log('Finalizando a compra')
    }
}
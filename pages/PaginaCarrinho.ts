import {Page} from '@playwright/test'
import { AbstractPage } from './AbstractPage';

export class PaginaCarrinho extends AbstractPage{
    
    readonly box = '[class="cart_item"]'
    readonly tituloBox = '[data-test="inventory-item-name"]'
    readonly botaoCheckout = '#checkout'
    
    constructor(page: Page){
        super(page);
    }

    verificarPrimeiroItem(){
        return this.page.locator(this.box).nth(0).locator(this.tituloBox)
    }

    async clicarBotaoCheckout(){
        await this.page.click(this.botaoCheckout);
    }

}
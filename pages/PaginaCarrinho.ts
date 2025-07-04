import {Page} from '@playwright/test'
import { AbstractPage } from './AbstractPage';

export class PaginaCarrinho extends AbstractPage{
    
    readonly box = '[class="cart_item"]'
    readonly tituloBox = '[data-test="inventory-item-name"]'
    readonly botaoRemoverDaSauceLabsBackpack = '#remove-sauce-labs-backpack'
    readonly botaoCheckout = '#checkout'
    
    constructor(page: Page){
        super(page);
    }

    verificarPrimeiroItem(){
        return this.page.locator(this.box).nth(0).locator(this.tituloBox)
    }

    verificarSegundoItem(){
        return this.page.locator(this.box).nth(1).locator(this.tituloBox)
    }

    async verificarSePrimeiroItemEstaNaTela(timeout){

        try{
            await this.page.locator(this.box).nth(0).locator(this.tituloBox).waitFor({ timeout})
            return true;
        }catch{
            return false;
        }
    }

    async clicarBotaoCheckout(){
        await this.page.click(this.botaoCheckout);
        console.log('Indo para página de Checkout')
    }

    async clicarBotaoRemoverSauceLabsBackpack(){
        await this.page.click(this.botaoRemoverDaSauceLabsBackpack)
        console.log('Removido o item Sauce Labs Backpack do carrinho')
    }
}
import {Page} from '@playwright/test'
import { AbstractPage } from './AbstractPage';

export class PaginaItens extends AbstractPage{
    
    readonly botaoAdicionarSauceLabsBackpack = '#add-to-cart-sauce-labs-backpack'
    readonly quantidadeItensCarrinho = '[data-test="shopping-cart-badge"]'
    readonly botaoIrParaCarrinho = '#shopping_cart_container'

    constructor(page: Page){
        super(page);
    }

    async clicarBotaoSauceLabsBackpack(){
        await this.page.click(this.botaoAdicionarSauceLabsBackpack)
    }

    verificarQuantidadeDeItensCarrinho(){
        return this.page.locator(this.quantidadeItensCarrinho)
    }

    async clicarBotaoCarrinho(){
        await this.page.click(this.botaoIrParaCarrinho)
    }

}
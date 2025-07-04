import {Page} from '@playwright/test'
import { AbstractPage } from './AbstractPage';

export class PaginaItens extends AbstractPage{
    
    readonly botaoAdicionarSauceLabsBackpack = '#add-to-cart-sauce-labs-backpack'
    readonly botaoAdicionarSauceLabsBikeLight= '[id="add-to-cart-sauce-labs-bike-light"]'
    readonly quantidadeItensCarrinho = '[data-test="shopping-cart-badge"]'
    readonly botaoIrParaCarrinho = '#shopping_cart_container'

    constructor(page: Page){
        super(page);
    }

    async clicarBotaoSauceLabsBackpack(){
        await this.page.click(this.botaoAdicionarSauceLabsBackpack)
        console.log('Sauce Labs Backpack adicionada ao carrinho')
    }

    async clicarSauceLabsBikeLight(){
        await this.page.click(this.botaoAdicionarSauceLabsBikeLight)
        console.log('Sauce Labs Bike Light adicionada ao carrinho')
    }

    verificarQuantidadeDeItensCarrinho(){
        return this.page.locator(this.quantidadeItensCarrinho)
    }

    async clicarBotaoCarrinho(){
        await this.page.click(this.botaoIrParaCarrinho)
        console.log('Indo para página do carrinho')
    }

}
import {Page, expect} from '@playwright/test'
import { AbstractPage } from './AbstractPage';

export class PaginaItens extends AbstractPage{
    
    readonly botaoAdicionarSauceLabsBackpack = '#add-to-cart-sauce-labs-backpack'
    readonly botaoAdicionarSauceLabsBikeLight= '[id="add-to-cart-sauce-labs-bike-light"]'
    readonly quantidadeItensCarrinho = '[data-test="shopping-cart-badge"]'
    readonly botaoIrParaCarrinho = '#shopping_cart_container'
    readonly botaoFiltro = '[data-test="product-sort-container"]'
    readonly precoItem = '[data-test="inventory-item-price"]'

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

    async clicarBotaoFiltro(){
        await this.page.click(this.botaoFiltro)
        console.log('Botão de Filtro clicado')
    }

    async selecionarOpcaoCrescenteFiltro(){
        await this.clicarBotaoFiltro();
        await this.page.selectOption(this.botaoFiltro, {label: 'Price (low to high)'})
        console.log('Selecionado opção de filtro:: Price (low to high)')
    }

    async obterPrecos(): Promise<number[]>{
            let stringPreco = await this.page.locator(this.precoItem).allTextContents(); 
            console.log('Preços obtidos em ordem: '+ stringPreco)
            return stringPreco.map(conversao => parseFloat(conversao.replace('$','')));
    }
}
import {expect} from '@playwright/test'
import {test} from '../fixtures/helpers'



test.describe('Testes Obrigatórios', ()=>{

    test.beforeEach(async ({paginalogin})=>{
        await paginalogin.goto();
    })

    test('Cenário 1 — Login válido', async ({page, paginalogin})=>{
        await paginalogin.logarComoStandardUser();
        await expect(page).toHaveURL(/inventory\.html$/)
    })

    test('Cenário 2 — Login inválido', async ({page, paginalogin })=>{
        await paginalogin.preencherLogin('locked_out_user')
        await paginalogin.preencherSenha('secret_sauce')
        await paginalogin.clicarBotaoLogin()
        await expect(paginalogin.verificarMensagemErro()).toHaveText('Epic sadface: Sorry, this user has been locked out.')
        await expect(page).toHaveURL(/.*saucedemo\.com/)
    })

    test('Cenário 3 — Adicionar produto ao carrinho', async ({paginalogin, paginaItens, paginaCarrinho})=>{
        await paginalogin.logarComoStandardUser();
        await paginaItens.clicarBotaoSauceLabsBackpack();
        await expect(paginaItens.verificarQuantidadeDeItensCarrinho()).toHaveText('1');
        await paginaItens.clicarBotaoCarrinho();
        await expect(paginaCarrinho.verificarPrimeiroItem()).toHaveText('Sauce Labs Backpack')
    })

    test('Cenário 4 — Finalização de compra', async ({paginalogin, paginaItens, paginaCarrinho, paginaCheckout, 
                                                    paginaOverview, paginaCheckCompleto})=>{
        await paginalogin.logarComoStandardUser();
        await paginaItens.clicarBotaoSauceLabsBackpack();
        await paginaItens.clicarBotaoCarrinho();
        await paginaCarrinho.clicarBotaoCheckout();
        await paginaCheckout.preencherInformacoesDeCheckout();
        await paginaCheckout.clicarBotaoContinue();
        await paginaOverview.clicarbotaoFinish();
        await expect(paginaCheckCompleto.verificarMensagemDeFinalizacao()).toHaveText(paginaCheckCompleto.textoMensagemDeFinalizacao)
    })

})
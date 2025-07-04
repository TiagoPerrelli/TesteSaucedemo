import {expect} from '@playwright/test'
import {test} from '../fixtures/helpers'



test.describe('Testes Obrigatórios', ()=>{

    test.beforeEach(async ({paginalogin})=>{
        await paginalogin.goto();
    })

    test('Cenário 1 — Login válido', async ({page, paginalogin})=>{
        await paginalogin.logarComoStandardUser();
        console.log('Verificando URL')
        await expect(page).toHaveURL(/inventory\.html$/)
    })

    test('Cenário 2 — Login inválido', async ({page, paginalogin })=>{
        await paginalogin.preencherLogin('locked_out_user')
        await paginalogin.preencherSenha('secret_sauce')
        await paginalogin.clicarBotaoLogin()
        console.log('Verificando mensagem de erro')
        await expect(paginalogin.verificarMensagemErro()).toHaveText('Epic sadface: Sorry, this user has been locked out.')
        console.log('Verificando URL')
        await expect(page).toHaveURL(/.*saucedemo\.com/)
    })

    test('Cenário 3 — Adicionar produto ao carrinho', async ({paginalogin, paginaItens, paginaCarrinho})=>{
        await paginalogin.logarComoStandardUser();
        await paginaItens.clicarBotaoSauceLabsBackpack();
        console.log('Verificando quantidade de itens no ícone do carrinho')
        await expect(paginaItens.verificarQuantidadeDeItensCarrinho()).toHaveText('1');
        await paginaItens.clicarBotaoCarrinho();
        console.log('Verificando que o item adicionado está presente no carrinho')
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
        console.log('Verificando confirmação da compra')
        await expect(paginaCheckCompleto.verificarMensagemDeFinalizacao()).toHaveText('Thank you for your order!')
    })

})


test.describe('Testes Não Obrigatórios', ()=>{
    
    test.beforeEach(async ({paginalogin})=>{
        await paginalogin.goto();
    })

    test('Cenário 5 - Verificar o tempo de remoção de um item do carrinho', async ({page, paginalogin, paginaItens, paginaCarrinho})=>{
        let timeout = 2000
        await paginalogin.logarComoStandardUser();
        await paginaItens.clicarBotaoSauceLabsBackpack();
        await paginaItens.clicarBotaoCarrinho();

        const tempoInicial = Date.now()

        await paginaCarrinho.clicarBotaoRemoverSauceLabsBackpack();
        expect(await paginaCarrinho.verificarSePrimeiroItemEstaNaTela(timeout)).toBe(false)

        const duracaoDeRemocao = Date.now() - tempoInicial - timeout;
        expect(duracaoDeRemocao).toBeLessThan(timeout)
        console.log('Teste finalizado, o tempo da duração da remoção do item foi de: ' + (duracaoDeRemocao) + 'ms.')
    })

    test('Cenário 6 - Adicionar mais de um item ao carrinho e verificar segundo item da lista do carrinho', async ({ paginalogin, paginaItens, paginaCarrinho})=>{
        await paginalogin.logarComoStandardUser();
        await paginaItens.clicarBotaoSauceLabsBackpack();
        await paginaItens.clicarSauceLabsBikeLight();
        await expect(paginaItens.verificarQuantidadeDeItensCarrinho()).toHaveText('2');
        await paginaItens.clicarBotaoCarrinho();
        console.log('Verificando segundo item da lista de compras')
        await expect(paginaCarrinho.verificarSegundoItem()).toHaveText('Sauce Labs Bike Light')
    })
})
import {test as fixtures} from '@playwright/test'
import { PaginaLogin } from '../pages/PaginaLogIn'
import { PaginaItens } from '../pages/PaginaItens';
import { PaginaCarrinho } from '../pages/PaginaCarrinho';
import { PaginaCheckout } from '../pages/PaginaCheckout';
import { PaginaOverview } from '../pages/PaginaOverview';
import { PaginaCheckCompleto } from '../pages/PaginaCheckCompleto';


type PaginasFixtures = {
    paginalogin: PaginaLogin;
    paginaItens: PaginaItens;
    paginaCarrinho: PaginaCarrinho;
    paginaCheckout: PaginaCheckout; 
    paginaOverview: PaginaOverview;
    paginaCheckCompleto: PaginaCheckCompleto;
}

export const test = fixtures.extend<PaginasFixtures>({
    paginalogin: async({page}, use)=>{
        await use(new PaginaLogin(page))
    },

    paginaItens: async({page}, use)=>{
        await use(new PaginaItens(page))
    },

    paginaCarrinho: async({page}, use)=>{
        await use(new PaginaCarrinho(page))
    },

    paginaCheckout: async({page}, use)=>{
        await use(new PaginaCheckout(page))
    },

    paginaOverview: async({page}, use)=>{
        await use(new PaginaOverview(page))
    },

    paginaCheckCompleto: async({page}, use)=>{
        await use(new PaginaCheckCompleto(page))
    }
})
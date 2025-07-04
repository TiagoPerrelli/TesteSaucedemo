- Como instalar dependências <br>
      . Para executar o código, é necessário possuir o Node.js instalado no computador, para isso, vá até o site (https://nodejs.org/pt/download) e instale a sua última versão. <br>
      . Após isso, digite o seguinte comando no seu terminal da pasta do projeto: `npm init playwright@latest`. <br>
      . Se assegure de selecionar o tipo de linguagem typescript e aceitar instalar os browsers do playwright. <br>

- Como rodar os testes <br>
      . Para rodar os testes, basta abrir o terminal no local da pasta e rodar o comando a seguir: <br> <br>
         &nbsp;       &nbsp;&nbsp;    &nbsp;&nbsp;           `npx playwright test` <br> <br>
      . Ao realizar este comando, serão executados todos os testes em 3 diferentes browsers. Caso queira executar os testes somente em um browser e utilizar uma interface mais amigável para acompanhar os logs e execução, basta utilizar o comando acima adicionado de alguns termos, exemplo: <br> <br>
          &nbsp;       &nbsp;&nbsp;    &nbsp;&nbsp;  `npx playwright test --project firefox --ui` <br> 


- Qualquer consideração técnica que achar relevante<br>
. Foram criadas três pastas para facilitar a escalabilidade e manutenabilidade do código.<br>
&nbsp;&nbsp;&nbsp;&nbsp; ~ A pasta de fixtures que contém o arquivo helpers.ts criada com o objetivo de simplificar o código;<br>
&nbsp;&nbsp;&nbsp;&nbsp; ~ A pasta pages que contém as páginas contendo métodos atrelados à elas que facilitam toda a criação de testes<br>
&nbsp;&nbsp;&nbsp;&nbsp; ~ A pasta de tests onde estão alocados os testes no arquivo testes.spec.ts - Nele, eles estão segregados por testes obrigatórios e os &nbsp;&nbsp;&nbsp;&nbsp;não obrigatórios. <br>
. Foram realizados alguns cenários a mais, sendo eles: <br>
&nbsp;&nbsp;&nbsp;&nbsp; ~ Cenário 5 - Verificar o tempo de remoção de um item do carrinho: <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; > Nele foi verificado o tempo de remoção de um item do carrinho, a fim de verificar se está com boa performance. <br>
&nbsp;&nbsp;&nbsp;&nbsp; ~ Cenário 6 - Adicionar mais de um item ao carrinho e verificar segundo item da lista do carrinho: <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; > Nele foi verificado o segundo item da lista de compras, utilizando a função nth() para isso.<br>
&nbsp;&nbsp;&nbsp;&nbsp; ~ Cenário 7 - Ordenação Crescente dos itens: <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; > Nele foi verificado o filtro presente na página de itens, verificando se os itens ficam de fato ordenados em ordem crescente. Interessante visto que foi necessário usar a função sort.
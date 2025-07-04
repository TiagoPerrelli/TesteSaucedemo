# Como instalar dependências <br>
- Para executar o código, é necessário possuir o Node.js instalado no computador, para isso, vá até o site https://nodejs.org/pt/download e instale a sua última versão. <br>
- Após isso, digite o seguinte comando no seu terminal no local da pasta do projeto:<br><br>
  ```
  npm init playwright@latest
  ```
- Se assegure de selecionar o tipo de linguagem typescript e aceitar instalar os browsers do playwright. <br>

# Como rodar os testes <br>
- Para rodar os testes, basta abrir o terminal no local da pasta e rodar o comando a seguir: <br><br>
  ```
  npx playwright test
  ``` 
- Ao realizar este comando, serão executados todos os testes em 3 diferentes browsers. Caso queira executar os testes somente em um browser e utilizar uma interface mais amigável para acompanhar os logs e execução, basta utilizar o comando acima adicionado de alguns termos, exemplo: <br><br>
  ```
  npx playwright test --project firefox --ui
  ```

# Qualquer consideração técnica que achar relevante<br>
- Foram criadas três pastas para facilitar a escalabilidade e manutenabilidade do código.<br>
. A pasta de fixtures que contém o arquivo helpers.ts criada com o objetivo de simplificar o código;<br>
. A pasta pages armazena as classes das páginas, com métodos específicos que auxiliam na automação dos testes;<br>
. A pasta de tests é onde estão alocados os testes no arquivo testes.spec.ts - Aqui, os testes estão segregados por testes obrigatórios e os não obrigatórios. <br>
- Foram realizados alguns cenários a mais, sendo eles: <br>
. Cenário 5 - Verificar o tempo de remoção de um item do carrinho: <br>
&nbsp;&nbsp;&nbsp;&nbsp;  > Verifição do tempo de remoção de um item do carrinho, a fim de verificar se está com boa performance. <br>
. Cenário 6 - Adicionar mais de um item ao carrinho e verificar segundo item da lista do carrinho: <br>
&nbsp;&nbsp;&nbsp;&nbsp;  > Verificação do segundo item da lista de compras, utilizando a função nth() para isso.<br>
 . Cenário 7 - Ordenação Crescente dos itens: <br>
&nbsp;&nbsp;&nbsp;&nbsp;  > Verificação do filtro presente na página de itens, verificando se os itens ficam de fato ordenados em ordem crescente.<br>
 . Cenário 8 - Verificar se imagem do Sauce Labs Backpack está disponível no servidor: <br>
&nbsp;&nbsp;&nbsp;&nbsp;  > Confirmação de que a imagem está de fato disponível e retornando status 200 (OK).
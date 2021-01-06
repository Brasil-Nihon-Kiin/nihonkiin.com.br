# Brasil Nihon Kiin

A infraestrutura do frontend do site da Brasil Nihon Kiin.


---

**Table of Contents**

- [1. Ao Desenvolvedor ou Contribuidor](#1-ao-desenvolvedor-ou-contribuidor)
    - [1.1. Princípios de Design deste Projeto](#11-princípios-de-design-deste-projeto)
    - [1.2. Diretivas ao Backend](#12-diretivas-ao-backend)
    - [1.3. Configurando o Ambiente de Desenvolvimento](#13-configurando-o-ambiente-de-desenvolvimento)
    - [1.4. Como incluir um SGF interativamente em um arquivo HTML](#14-como-incluir-um-sgf-interativamente-em-um-arquivo-html)

---

## 1. Ao Desenvolvedor ou Contribuidor

Este projeto possui código aberto, ou seja, qualquer um pode examinar como as coisas funcionam e, ainda, propor mudanças e melhoras.

- [Cite mudanças verbalmente][issues]
- [Proponha mudanças com seu próprio código][prs]


[issues]: https://github.com/Brasil-Nihon-Kiin/nihonkiin.com.br/issues
[prs]: https://github.com/Brasil-Nihon-Kiin/nihonkiin.com.br/pulls

### 1.1. Princípios de Design deste Projeto

O princípio-mor deste projeto é a simplicidade. Somente o que é simples e efetivo será implementado, tanto no frontend quanto no backend. Bibliotecas de frontend, por exemplo, como Bootstrap poderão vir a ser utilizadas, mas recomenda-se que não a princípio pois, em geral, são complicações desnecessárias.

### 1.2. Diretivas ao Backend

Evitaremos ao máximo sequer utilizar backend. O custo de manutenção cresce exponencialmente ao se acrescentar servidores personalizados. O serviço do Github Pages, por exemplo abstrai grande parte do custo de manutenção de um servidor para entregar o frontend, isto é, o HTML estático.

Mais para frente, se houver interesse ou necessidade, podemos acrescentar algo como um banco de dados no Firebase e ações com Firebase Functions. Por enquanto, porém, utilizar o frontend e o browser do usuário é mais do que suficiente. E isso mesmo que tenhamos que lidar com um banco de dados nosso, pois, já que não há tantos jogadores de Go no Brasil, podemos simplesmente mandar o banco de dados inteiro juntamente com a página sem arcar com muita lentidão.

Essa mesma regra de evitar o backend vale para algo como criação de um fórum. Ao invés de reinventar a roda, o usuário, assim como o programador, agradeceriam se terceirizássemos esse tipo de coisa para sites já bem mais sedimentados nesses nichos, como Reddit, Facebook &mdash; grupo do [Go Brasil][go_brasil_fb] &mdash; ou os [fóruns do OGS][ogs_forums].


[go_brasil_fb]: https://www.facebook.com/groups/gobrasil
[ogs_forums]: https://forums.online-go.com/

### 1.3. Configurando o Ambiente de Desenvolvimento

Utilizamos TypeScript para obter um ambiente de programação com mais checagem de tipos e melhor suporte à objetos, o que, em geral, leva a menos bugs, é basicamente uma versão mais agradável e simples de se utilizar de JavaScript. Além disso, ela abstrai todas as milhões de mudanças que JavaScript vêm tomando ao longo dos anos.

Além disso, recomenda-se o uso do editor (IDE) VS Code, que é leve além de completo. Padronizar o ambiente de desenvolvimento é útil para que não se perca tempo com picuinhas de estilo. Por falar em estilo, recomenda-se também padronizar o formatador do código, que, no caso, seria o [Prettier][prettier] &mdash; no VS Code, <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>f</kbd> é o atalho para formatar o código do arquivo atual.

O ambiente ideal atual para o desenvolvimento do site é:

1. Instale todas as dependências localmente via `npm i`
1. Abra, idealmente 3 terminais paralelos e digite os seguintes comandos em cada um para reatualizar as mudanças no código automaticamente quando se salvar o arquivo:
    1. `npm t -- --watch`
    1. `npx webpack --watch`
    1. `tsc -w`
1. Abra o `index.html` no browser juntamente com o inspetor de código.
    - Utilizo a extensão [Live Server][live_server] para atualizar a página web ao salvar o código.


[live_server]: https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer
[prettier]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

### 1.4. Como incluir um SGF interativamente em um arquivo HTML

<!-- TODO: Mencionar o pacote JS Glift: https://github.com/Kashomon/glift -->

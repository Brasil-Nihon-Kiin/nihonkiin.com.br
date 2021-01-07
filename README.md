<p align="center">
  <a href="http://www.nihonkiin.com.br/"><img src="assets/logo.png" /></a>
</p>

<p align="center">
  <a href="https://github.com/Brasil-Nihon-Kiin/nihonkiin.com.br/actions"><img src="https://github.com/Brasil-Nihon-Kiin/nihonkiin.com.br/workflows/TS%20Tests/badge.svg" alt="Github CI"/></a>
  <a href="https://gitter.im/nihonkiin-com-br/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge"><img src="https://badges.gitter.im/nihonkiin-com-br/community.svg" alt="Gitter"/></a>
</p>

# Brasil Nihon Kiin

> Accesse o site aqui: [nihonkiin.com.br][site]

A infraestrutura do frontend do site da Brasil Nihon Kiin.


[site]: http://www.nihonkiin.com.br/

---

**Table of Contents**

<div id="user-content-toc">
  <ul>
    <li>
      <a href="#1-aos-desenvolvedores-e-contribuidores"
        >1. Aos Desenvolvedores e Contribuidores</a
      >
      <ul>
        <li>
          <a href="#11-princípios-de-design-deste-projeto"
            >1.1. Princípios de Design deste Projeto</a
          >
        </li>
        <li>
          <a href="#12-diretivas-ao-backend">1.2. Diretivas ao Backend</a>
        </li>
        <li>
          <a href="#13-configurando-o-ambiente-de-desenvolvimento"
            >1.3. Configurando o Ambiente de Desenvolvimento</a
          >
        </li>
        <li>
          <a href="#14-como-incluir-um-sgf-interativamente-em-um-arquivo-html"
            >1.4. Como incluir um SGF interativamente em um arquivo HTML</a
          >
        </li>
      </ul>
    </li>
  </ul>
</div>

---

## 1. Aos Desenvolvedores e Contribuidores

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
    - Você precisará instalar [`node.js`][node.js] primeiro.
1. Abra, idealmente 3 terminais paralelos e digite os seguintes comandos em cada um para reatualizar as mudanças no código automaticamente quando se salvar o arquivo:
    1. `tsc -w`
        - Compila &mdash; na verdade, o termo correto seria transpila &mdash; o código de TypeScript para JavaScript, o que será utilizado para rodar os testes.
    1. `npm t -- --watch`
        - Testes.
    1. `npx webpack --watch`
        - [Webpack][webpack] comprime o código escrito em TypeScript para somente um arquivo JavaScript, o que ajuda na performance do site e simplifica o número de arquivos em produção.
1. Abra o `index.html` no browser juntamente com o inspetor de código.
    - Recomenda-se utilizar a extensão [Live Server][live_server] para atualizar a página web ao salvar o código.


[live_server]: https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer
[node.js]: https://nodejs.org/en/
[prettier]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
[webpack]: https://webpack.js.org/

### 1.4. Como incluir um SGF interativamente em um arquivo HTML

Há algumas maneiras de se compartilhar arquivos SGF online:

1. Via link local. A pessoa baixa o arquivo como qualquer outro e depois visualiza o conteúdo com um editor.
1. Via um editor na própria página HTML.

A segunda opção é mais difícil pois requer algum programa que saiba ler SGFs e desenhar o jogo dinamicamente. Em WordPress, há algumas extensões para isso, mas a única que parece ter sobrevivido o teste do tempo foi a [Glift][glift]. Na verdade, ela é um pacote de JavaScript, então pode ser utilizada fora do WordPress também. Inclusive, ela era utilizada no, agora defunto, site [GoGameGuru][gogameguru].

Para incluir um SGF dinamicamente dentro da página HTML, é preciso:

1. Criar um elemento `<div>` com um `id` específico.
1. Criar um `<script>` com `glift.create` dentro.

Um exemplo:

```html
<div id="SGF" style="height: 500px; width: 100%"></div>
<script>
  glift.create({
    divId: "SGF",
    sgf: "Liang Weijin vs Fan Xiping.sgf",
  });
</script>
```

Glift está adicionado à pasta `assets/` deste projeto, então, para adicioná-lo à página em que você estiver trabalhando, adicione ao `<head>`:

```html
<script src="/assets/glift_1_1_2.min.js"></script>
```


[glift]: https://github.com/Kashomon/glift
[gogameguru]: https://gogameguru.com/

### 1.5. Sobre Testes

Testes (TDD) são sempre bons e melhoram o produto em absoluto. Porém, testes de UI tendem a ter um custo benefício extremamente menor.
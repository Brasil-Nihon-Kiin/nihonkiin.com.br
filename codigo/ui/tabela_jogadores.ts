import { jogadoresDB } from "../dados/jogadores/jogadores_db";
import Jogador from "../dados/jogadores/modelos_jogadores";

export default class TabelaJogadores extends HTMLElement {
  static readonly tag: string = "tabela-jogadores";

  private static readonly template: string = `
    <table>
      <thead>
        <th>Nome</th>
        <th>País</th>
        <th>Estado</th>
        <th>Cidade</th>
      </thead>
      <tbody></tbody>
    </table>
  `;
  private static readonly jogadores: Jogador[] = jogadoresDB;

  private jogadorAtual: Jogador = TabelaJogadores.jogadores[0];
  private linhaAtual: HTMLTableRowElement = <HTMLTableRowElement>(
    document.createElement("tr")
  );

  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = TabelaJogadores.template;

    const corpoTabela: HTMLElement = <HTMLElement>this.querySelector("tbody");
    TabelaJogadores.jogadores.forEach((jogador: Jogador): void => {
      this.jogadorAtual = jogador;

      this.linhaAtual = <HTMLTableRowElement>document.createElement("tr");

      // 1. Nome
      this.adicionaCelulaNome();

      // 2. Onde você mora atualmente
      this.adicionaCelulaPais();
      this.adicionaCelulaEstado();
      this.adicionaCelulaCidade();

      // 3. Contato

      corpoTabela.append(this.linhaAtual);
    });
  }

  //----------------------------------------------------------------------------

  private adicionaCelulaNome = (): void => {
    const celulaNome: HTMLTableCellElement = <HTMLTableCellElement>(
      document.createElement("td")
    );
    celulaNome.innerHTML = this.jogadorAtual.nome;
    this.linhaAtual.append(celulaNome);
  };

  //----------------------------------------------------------------------------

  private adicionaCelulaPais = (): void => {
    const celulaPais: HTMLTableCellElement = <HTMLTableCellElement>(
      document.createElement("td")
    );
    celulaPais.innerHTML = this.jogadorAtual.pais;
    this.linhaAtual.append(celulaPais);
  };

  private adicionaCelulaEstado = (): void => {
    const celulaEstado: HTMLTableCellElement = <HTMLTableCellElement>(
      document.createElement("td")
    );
    celulaEstado.innerHTML = this.jogadorAtual.estado;
    this.linhaAtual.append(celulaEstado);
  };

  private adicionaCelulaCidade = (): void => {
    const celulaCidade: HTMLTableCellElement = <HTMLTableCellElement>(
      document.createElement("td")
    );
    celulaCidade.innerHTML = this.jogadorAtual.cidade;
    this.linhaAtual.append(celulaCidade);
  };

  //----------------------------------------------------------------------------

  
}

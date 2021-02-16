import { Servidor } from "../dados/jogadores/modelos_jogadores";

export default class PerfisServidores extends HTMLElement {
  static readonly tag: string = "perfis-servidores";

  private static readonly template: string = `
    <div id="campos"></div>

    <button type="button" id="adiciona-campo-de-perfil-servidor">+</button>
  `;

  constructor() {
    super();
  }

  private index: number = 1;

  connectedCallback() {
    this.innerHTML = PerfisServidores.template;

    this.adicionaServidores();

    this.inicializaEscutaDeAdicaoDeCampos();
  }

  private inicializaEscutaDeAdicaoDeCampos = (): void => {
    const botaoDeAdicaoDeCamps: HTMLButtonElement = <HTMLButtonElement>(
      this.querySelector("button")
    );

    botaoDeAdicaoDeCamps.onclick = (_: MouseEvent): void =>
      this.adicionaServidores();
  };

  private get camposDiv(): HTMLDivElement {
    return <HTMLDivElement>this.querySelector("div#campos");
  }

  private adicionaServidores = (): void => {
    this.adicionaServidoresDropDown();
    this.adicionaPerfilInput();
    this.adicionaLineBreak();

    this.index++;
  };

  private adicionaServidoresDropDown = (): void => {
    const dropdownID: string = `servidor-dropdown-${this.index}`;

    const select: HTMLSelectElement = document.createElement("select");
    select.id = dropdownID;
    select.name = dropdownID;

    Object.values(Servidor).forEach((servidor: Servidor): void => {
      const option: HTMLOptionElement = document.createElement("option");
      option.value = servidor;
      option.innerHTML = servidor;

      select.append(option);
    });

    this.camposDiv.append(select);
  };

  private adicionaPerfilInput = (): void => {
    const campoDePerfilID: string = `servidor-nickname-${this.index}`;

    const novoCampoDePerfil: HTMLInputElement = document.createElement("input");
    novoCampoDePerfil.type = "text";
    novoCampoDePerfil.name = campoDePerfilID;
    novoCampoDePerfil.id = campoDePerfilID;

    this.camposDiv.append(novoCampoDePerfil);
  };

  private adicionaLineBreak = (): void =>
    this.camposDiv.append(document.createElement("br"));
}

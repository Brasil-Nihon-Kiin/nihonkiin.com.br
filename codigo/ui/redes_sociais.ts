export default class RedesSociais extends HTMLElement {
  static readonly tag: string = "redes-sociais";

  private static readonly template: string = `
    <div id="campos"></div>
    
    <button type="button" id="adiciona-campo-de-rede-social">+</button>
  `;

  private index: number = 1;

  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = RedesSociais.template;

    this.adicionaNovoCampoDeRedeSocial();

    this.inicializaEscutaDeAdicaoDeCampoDeRedeSocial();
  }

  private inicializaEscutaDeAdicaoDeCampoDeRedeSocial = (): void => {
    const botaoDeAdicaoDeCampo = <HTMLButtonElement>(
      this.querySelector("button#adiciona-campo-de-rede-social")
    );

    botaoDeAdicaoDeCampo.onclick = (_: MouseEvent): void =>
      this.adicionaNovoCampoDeRedeSocial();
  };

  private get camposDiv(): HTMLDivElement {
    return <HTMLDivElement>this.querySelector("div#campos");
  }

  private get campoID(): string {
    return `rede-social-${this.index}`;
  }

  private adicionaNovoCampoDeRedeSocial = (): void => {
    this.adicionaLegenda();
    this.adicionaNovoCampo();
    this.adicionaLineBreak();

    this.index++;
  };

  private adicionaLegenda = (): void => {
    const novaLegenda: HTMLLabelElement = document.createElement("label");
    novaLegenda.setAttribute("for", this.campoID);
    novaLegenda.innerText = `Rede Social #${this.index}`;

    this.camposDiv.append(novaLegenda);
  };

  private adicionaNovoCampo = (): void => {
    const novoCampo: HTMLInputElement = document.createElement("input");
    novoCampo.type = "url";
    novoCampo.name = this.campoID;
    novoCampo.id = this.campoID;

    this.camposDiv.append(novoCampo);
  };

  private adicionaLineBreak = (): void =>
    this.camposDiv.append(document.createElement("br"));
}

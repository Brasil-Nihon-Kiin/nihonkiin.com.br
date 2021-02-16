export default class RedesSociais extends HTMLElement {
  static readonly tag: string = "redes-sociais";

  private static readonly template: string = `
    <div id="campos">
      <label for="rede-social-1">Rede Social #1</label>
      <input type="url" name="rede-social-1" id="rede-social-1" />
    </div>
    
    <button type="button" id="adiciona-campo-de-rede-social">+</button>
  `;

  private index: number = 1;

  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = RedesSociais.template;

    this.inicializaEscutaDeAdicaoDeCampoDeRedeSocial();
  }

  private inicializaEscutaDeAdicaoDeCampoDeRedeSocial = (): void => {
    const botaoDeAdicaoDeCampo = <HTMLButtonElement>(
      this.querySelector("button#adiciona-campo-de-rede-social")
    );

    botaoDeAdicaoDeCampo.onclick = (_: MouseEvent): void =>
      this.adicionaNovoCampoDeRedeSocial();
  };

  private adicionaNovoCampoDeRedeSocial = (): void => {
    this.index++;
    const campoID: string = `rede-social-${this.index}`;

    const novaLegenda: HTMLLabelElement = document.createElement("label");
    novaLegenda.setAttribute("for", campoID);
    novaLegenda.innerText = `Rede Social #${this.index}`;

    const novoCampo: HTMLInputElement = document.createElement("input");
    novoCampo.type = "url";
    novoCampo.name = campoID;
    novoCampo.id = campoID;

    const camposDiv = <HTMLDivElement>this.querySelector("div#campos")!;
    camposDiv.append(document.createElement("br"));
    camposDiv.append(novaLegenda);
    camposDiv.append(novoCampo);
  };
}

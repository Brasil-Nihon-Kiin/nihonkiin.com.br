export default class BotaoCadastroJogador extends HTMLElement {
  static readonly tag: string = "botao-cadastro-jogador";

  private static readonly moderatorEmail: string = "philippefanaro@gmail.com";

  private static readonly template: string = `
    <button type="submit" id="envio">
      <a 
        id="link-envia-email" 
        href="mailto:${BotaoCadastroJogador.moderatorEmail}">
        Enviar Email
      </a>
    </button>
  `;

  private concordaComFaltaDePrivacidade: boolean = false;

  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = BotaoCadastroJogador.template;

    this.inicializaEscutaCheckboxDePrivacidade();
  }

  private inicializaEscutaCheckboxDePrivacidade = (): void => {
    const checkbox: HTMLInputElement = <HTMLInputElement>(
      document.querySelector("input#ciencia-privacidade")!
    );

    checkbox.onclick = (): void => {
      this.concordaComFaltaDePrivacidade = !this.concordaComFaltaDePrivacidade;
    };
  };
}

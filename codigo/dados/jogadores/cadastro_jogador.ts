export default class BotaoCadastroJogador extends HTMLElement {
  static readonly tag: string = "botao-cadastro-jogador";

  private static readonly moderatorEmail: string = "philippefanaro@gmail.com";

  private static readonly template: string = `
    <button type="button" id="envio">
      <a id="link-envia-email">Enviar Email</a>
    </button>
  `;

  private concordaComFaltaDePrivacidade: boolean = false;
  private emailLink: string = `mailto:${BotaoCadastroJogador.moderatorEmail}?subject=Cadastro de Jogador&body=`;

  constructor() {
    super();
  }

  private inicializaEscutaCheckboxDePrivacidade = (): void => {
    const checkbox = <HTMLInputElement>(
      this.parentElement!.querySelector("input#ciencia-privacidade")!
    );
    checkbox.onclick = (): void => {
      this.concordaComFaltaDePrivacidade = !this.concordaComFaltaDePrivacidade;
    };
  };

  connectedCallback() {
    this.innerHTML = BotaoCadastroJogador.template;

    this.inicializaEscutaCheckboxDePrivacidade();
    this.inicializaEscutaDeEnvioDeEmail();
  }

  private inicializaEscutaDeEnvioDeEmail = (): void => {
    const botao = <HTMLButtonElement>this.querySelector("button#envio");
    botao.onclick = (): void => {
      if (this.concordaComFaltaDePrivacidade) {
        this.montaEmailLink();
        console.log(this.emailLink);
      }
    };
  };

  private montaEmailLink = (): void => {
    this.adicionaPrimeiroNome();
  };

  private adicionaPrimeiroNome = (): void => {
    this.emailLink += "Philippe";
  };
}

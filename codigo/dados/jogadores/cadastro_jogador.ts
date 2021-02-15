export default class BotaoCadastroJogador extends HTMLElement {
  static readonly tag: string = "botao-cadastro-jogador";

  private static readonly emailDoModerador: string = "philippefanaro@gmail.com";

  private static readonly template: string = `
    <button type="button" id="envio">
      <a id="link-envia-email">Enviar Email</a>
    </button>
  `;

  private static readonly linkDeEmailInicial: string = `mailto:${BotaoCadastroJogador.emailDoModerador}?subject=Cadastro de Jogador&body=`;

  private concordaComFaltaDePrivacidade: boolean = false;
  private emailLink: string = BotaoCadastroJogador.linkDeEmailInicial;

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
        this.abreEmail();
      }
    };
  };

  private abreEmail = (): void => {
    const ancoraParaEmail = <HTMLAnchorElement>(
      this.querySelector("a#link-envia-email")
    );
    ancoraParaEmail.href = this.emailLink;
    ancoraParaEmail.click();
  };

  private montaEmailLink = (): void => {
    this.emailLink = BotaoCadastroJogador.linkDeEmailInicial;
    this.adicionaPrimeiroNome();
    this.adicionaUltimoNome();
  };

  private adicionaPrimeiroNome = (): void => {
    const primeiroNomeInput = <HTMLInputElement>(
      this.parentElement!.parentElement!.querySelector("input#primeiro-nome")
    );
    this.emailLink += `<p>Primeiro Nome: ${primeiroNomeInput.value}</p>`;
  };

  private adicionaUltimoNome = (): void => {
    const ultimoNomeInput = <HTMLInputElement>(
      this.parentElement!.parentElement!.querySelector("input#ultimo-nome")
    );
    this.emailLink += `<p>Ultimo Nome: ${ultimoNomeInput.value}</p>`;
  };
}

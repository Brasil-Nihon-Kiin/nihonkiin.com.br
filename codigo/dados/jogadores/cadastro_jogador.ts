export default class BotaoCadastroJogador extends HTMLElement {
  static readonly tag: string = "botao-cadastro-jogador";

  private static readonly emailDoModerador: string = "philippefanaro@gmail.com";

  private static readonly template: string = `
    <button type="submit" id="envio">
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
      if (
        this.concordaComFaltaDePrivacidade &&
        this.topoFormulario.checkValidity()
      ) {
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

    // Nome
    this.adicionaPrimeiroNome();
    this.adicionaUltimoNome();

    // Onde você mora atualmente
    this.adicionaPais();
    this.adicionaEstado();
    this.adicionaCidade();

    // Contato
    this.adicionaEmail();
    this.adicionaTelefone();

    // Foto
    this.adicionaFoto();

    // Mensagem ao Moderador
    this.adicionaMsgAoModerador();
  };

  private get topoFormulario(): HTMLFormElement {
    return this.parentElement!.parentElement as HTMLFormElement;
  }

  //----------------------------------------------------------------------------

  private adicionaPrimeiroNome = (): void => {
    const primeiroNomeInput = <HTMLInputElement>(
      this.topoFormulario.querySelector("input#primeiro-nome")
    );
    this.emailLink += `<p>Primeiro Nome: ${primeiroNomeInput.value}</p>`;
  };

  private adicionaUltimoNome = (): void => {
    const ultimoNomeInput = <HTMLInputElement>(
      this.topoFormulario.querySelector("input#ultimo-nome")
    );
    this.emailLink += `<p>Último Nome: ${ultimoNomeInput.value}</p>`;
  };

  //----------------------------------------------------------------------------

  private adicionaPais = (): void => {
    const paisInput = <HTMLInputElement>(
      this.topoFormulario.querySelector("input#pais")
    );
    this.emailLink += `<p>País: ${paisInput.value}</p>`;
  };

  private adicionaEstado = (): void => {
    const estadoInput = <HTMLInputElement>(
      this.topoFormulario.querySelector("input#estado")
    );
    this.emailLink += `<p>Estado: ${estadoInput.value}</p>`;
  };

  private adicionaCidade = (): void => {
    const cidadeInput = <HTMLInputElement>(
      this.topoFormulario.querySelector("input#cidade")
    );
    this.emailLink += `<p>Cidade: ${cidadeInput.value}</p>`;
  };

  //----------------------------------------------------------------------------

  private adicionaEmail = (): void => {
    const emailInput = <HTMLInputElement>(
      this.topoFormulario.querySelector("input#email")
    );
    this.emailLink += `<p>Email: ${emailInput.value}</p>`;
  };

  private adicionaTelefone = (): void => {
    const telefoneInput = <HTMLInputElement>(
      this.topoFormulario.querySelector("input#tel")
    );
    this.emailLink += `<p>Telefone: ${telefoneInput.value}</p>`;
  };

  //----------------------------------------------------------------------------

  private adicionaFoto = (): void => {
    const fotoInput = <HTMLInputElement>(
      this.topoFormulario.querySelector("input#img-link")
    );
    this.emailLink += `<p>Link da Foto: ${fotoInput.value}</p>`;
  };

  //----------------------------------------------------------------------------

  private adicionaMsgAoModerador = (): void => {
    const msgAoModeradorTextarea = <HTMLTextAreaElement>(
      this.topoFormulario.querySelector("textarea#msg-ao-moderador")
    );
    this.emailLink += `<p>Mensagem ao Moderador: ${msgAoModeradorTextarea.value}</p>`;
  };

  //----------------------------------------------------------------------------
}

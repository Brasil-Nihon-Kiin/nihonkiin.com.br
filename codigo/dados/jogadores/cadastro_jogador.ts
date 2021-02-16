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

    // Outros Dados Pessoais
    this.adicionaNascimento();

    // Nível
    this.adicionaNivel();

    // Foto
    this.adicionaFoto();

    // Perfis Online
    this.adicionaPerfisOnline();

    // Redes Sociais
    this.adicionaRedesSociais();

    // Mensagem ao Moderador
    this.adicionaMsgAoModerador();
  };

  private get topoFormulario(): HTMLFormElement {
    return this.parentElement!.parentElement as HTMLFormElement;
  }

  private adicionaParagrafoHTML = (campoPreenchido: string): string =>
    "<p>" + campoPreenchido + "</p>";

  //----------------------------------------------------------------------------

  private adicionaPrimeiroNome = (): void => {
    const primeiroNomeInput = <HTMLInputElement>(
      this.topoFormulario.querySelector("input#primeiro-nome")
    );
    this.emailLink += this.adicionaParagrafoHTML(
      `Primeiro Nome: ${primeiroNomeInput.value}`
    );
  };

  private adicionaUltimoNome = (): void => {
    const ultimoNomeInput = <HTMLInputElement>(
      this.topoFormulario.querySelector("input#ultimo-nome")
    );
    this.emailLink += this.adicionaParagrafoHTML(
      `Último Nome: ${ultimoNomeInput.value}`
    );
  };

  //----------------------------------------------------------------------------

  private adicionaPais = (): void => {
    const paisInput = <HTMLInputElement>(
      this.topoFormulario.querySelector("input#pais")
    );
    this.emailLink += this.adicionaParagrafoHTML(`País: ${paisInput.value}`);
  };

  private adicionaEstado = (): void => {
    const estadoInput = <HTMLInputElement>(
      this.topoFormulario.querySelector("input#estado")
    );
    this.emailLink += this.adicionaParagrafoHTML(
      `Estado: ${estadoInput.value}`
    );
  };

  private adicionaCidade = (): void => {
    const cidadeInput = <HTMLInputElement>(
      this.topoFormulario.querySelector("input#cidade")
    );
    this.emailLink += this.adicionaParagrafoHTML(
      `Cidade: ${cidadeInput.value}`
    );
  };

  //----------------------------------------------------------------------------

  private adicionaEmail = (): void => {
    const emailInput = <HTMLInputElement>(
      this.topoFormulario.querySelector("input#email")
    );
    this.emailLink += this.adicionaParagrafoHTML(`Email: ${emailInput.value}`);
  };

  private adicionaTelefone = (): void => {
    const telefoneInput = <HTMLInputElement>(
      this.topoFormulario.querySelector("input#tel")
    );
    this.emailLink += this.adicionaParagrafoHTML(
      `Telefone: ${telefoneInput.value}`
    );
  };

  //----------------------------------------------------------------------------

  private adicionaNascimento = (): void => {
    const nascimentoInput = <HTMLInputElement>(
      this.topoFormulario.querySelector("input#nascimento")
    );
    this.emailLink += this.adicionaParagrafoHTML(
      `Data de Nascimento: ${nascimentoInput.value}`
    );
  };

  //----------------------------------------------------------------------------

  private adicionaNivel = (): void => {
    const nivelInput = <HTMLInputElement>(
      this.topoFormulario.querySelector("input#nivel")
    );
    this.emailLink += this.adicionaParagrafoHTML(`Nível: ${nivelInput.value}`);
  };

  //----------------------------------------------------------------------------

  private adicionaPerfisOnline = (): void => {
    
  };

  //----------------------------------------------------------------------------

  private adicionaRedesSociais = (): void => {
    const elementosDeRedesSociais = this.topoFormulario.querySelectorAll(
      "redes-sociais input"
    );

    let redesSociais: string = "";
    elementosDeRedesSociais.forEach((redeSocialInput: Element): void => {
      redesSociais +=
        "<li>" + (redeSocialInput as HTMLInputElement).value + "</li>";
    });

    this.emailLink += `<div><p>Redes Sociais:</p><ol>${redesSociais}</ol></div>`;
  };

  //----------------------------------------------------------------------------

  private adicionaFoto = (): void => {
    const fotoInput = <HTMLInputElement>(
      this.topoFormulario.querySelector("input#img-link")
    );
    this.emailLink += this.adicionaParagrafoHTML(
      `Link da Foto: ${fotoInput.value}`
    );
  };

  //----------------------------------------------------------------------------

  private adicionaMsgAoModerador = (): void => {
    const msgAoModeradorTextarea = <HTMLTextAreaElement>(
      this.topoFormulario.querySelector("textarea#msg-ao-moderador")
    );
    this.emailLink += this.adicionaParagrafoHTML(
      `Mensagem ao Moderador: ${msgAoModeradorTextarea.value}`
    );
  };

  //----------------------------------------------------------------------------
}

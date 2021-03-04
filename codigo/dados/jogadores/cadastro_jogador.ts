export default class BotaoCadastroJogador extends HTMLElement {
  static readonly tag: string = "botao-cadastro-jogador";

  private static readonly emailDoModerador: string = "moderador.nihon.kiin@gmail.com";

  private static readonly template: string = `
    <button type="submit" id="envio">
      <a id="link-envia-email">Enviar Email</a>
    </button>
  `;

  private static readonly linkDeEmailInicial: string = `mailto:${BotaoCadastroJogador.emailDoModerador}?body=`;
  private static readonly assuntoDeEmailInicial: string = `&subject=Cadastro de Jogador: `;

  private concordaComFaltaDePrivacidade: boolean = false;
  private assunto: string = BotaoCadastroJogador.assuntoDeEmailInicial;
  private emailLink: string = BotaoCadastroJogador.linkDeEmailInicial;

  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = BotaoCadastroJogador.template;

    this.inicializaEscutaCheckboxDePrivacidade();
    this.inicializaEscutaDeEnvioDeEmail();
  }

  private inicializaEscutaCheckboxDePrivacidade = (): void => {
    const checkbox = <HTMLInputElement>(
      this.parentElement!.querySelector("input#ciencia-privacidade")!
    );
    checkbox.onclick = (): void => {
      this.concordaComFaltaDePrivacidade = !this.concordaComFaltaDePrivacidade;
    };
  };

  private inicializaEscutaDeEnvioDeEmail = (): void => {
    const botao = <HTMLButtonElement>this.querySelector("button#envio");
    botao.onclick = (): void => {
      if (
        this.concordaComFaltaDePrivacidade &&
        this.topoFormulario.checkValidity()
      ) {
        this.montaEmailLink();
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
    this.assunto = BotaoCadastroJogador.assuntoDeEmailInicial;

    // 1. Nome
    this.adicionaPrimeiroNome();
    this.adicionaUltimoNome();

    // 2. Onde você mora atualmente
    this.adicionaPais();
    this.adicionaEstado();
    this.adicionaCidade();

    // 3. Contato
    this.adicionaEmail();
    this.adicionaTelefone();

    // 4. Outros Dados Pessoais
    this.adicionaNascimento();

    // 5. Nível
    this.adicionaNivel();

    // 6. Foto
    this.adicionaFoto();

    // 7. Perfis Online
    this.adicionaPerfisOnline();

    // 8. Redes Sociais
    this.adicionaRedesSociais();

    // 9. Mensagem ao Moderador
    this.adicionaMsgAoModerador();

    // 10. Mensagem final de ajuda ao moderador
    this.adicionaMsgDeAjudaAoModerador();

    // 11. Adiciona o assunto ao email
    this.emailLink += this.assunto;
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

    this.assunto += primeiroNomeInput.value;
  };

  private adicionaUltimoNome = (): void => {
    const ultimoNomeInput = <HTMLInputElement>(
      this.topoFormulario.querySelector("input#ultimo-nome")
    );
    this.emailLink += this.adicionaParagrafoHTML(
      `Último Nome: ${ultimoNomeInput.value}`
    );

    this.assunto += " " + ultimoNomeInput.value;
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
    const servidores: NodeListOf<HTMLSelectElement> = this.topoFormulario.querySelectorAll(
      "perfis-servidores select"
    );
    const perfis: NodeListOf<HTMLInputElement> = this.topoFormulario.querySelectorAll(
      "perfis-servidores input"
    );

    let parServidorPerfil: string = "";
    for (let i = 0; i < servidores.length; i++) {
      const servidor: string = servidores[i].value;
      const perfil: string = perfis[i].value;
      parServidorPerfil += `<li>(${servidor}, ${perfil})</li>`;
    }

    this.emailLink += `<div><p>Perfis Online:</p><ol>${parServidorPerfil}</ol></div>`;
  };

  //----------------------------------------------------------------------------

  private adicionaRedesSociais = (): void => {
    const elementosDeRedesSociais: NodeListOf<HTMLInputElement> = this.topoFormulario.querySelectorAll(
      "redes-sociais input"
    );

    let redesSociais: string = "";
    elementosDeRedesSociais.forEach(
      (redeSocialInput: HTMLInputElement): void => {
        redesSociais += "<li>" + redeSocialInput.value + "</li>";
      }
    );

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

  private adicionaMsgDeAjudaAoModerador = (): void => {
    this.emailLink += this.adicionaParagrafoHTML(
      "Ao moderador: para uma visualização mais agradável, salve o texto acima como um arquivo HTML e abra-o em um browser."
    );
  };
}

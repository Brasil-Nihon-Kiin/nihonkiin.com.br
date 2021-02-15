export default class BotaoCadastroJogador extends HTMLElement {
  static readonly tag: string = "botao-cadastro-jogador";

  private static readonly template: string = `
    <button type="submit" id="envio">
      <a id="link-envia-email" href="mailto:philippefanaro@gmail.com"
        >Enviar Email</a
      >
    </button>
  `;

  constructor() {
    super();
  }

  onConnectedCallback() {
    this.innerHTML = BotaoCadastroJogador.template;
  }
}

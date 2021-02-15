import BotaoCadastroJogador from "../dados/jogadores/cadastro_jogador";
import BrNhkNav from "../ui/nav";

export default class Configuracao {
  constructor() {
    this.define();
    this.prepend();
  }

  private define = (): void => {
    customElements.define(BrNhkNav.tag, BrNhkNav);
    customElements.define(BotaoCadastroJogador.tag, BotaoCadastroJogador);
  };

  private prepend = (): void => {
    window.addEventListener("DOMContentLoaded", (_: Event): void =>
      document.body.prepend(new BrNhkNav())
    );
  };
}

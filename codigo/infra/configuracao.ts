import BotaoCadastroJogador from "../dados/jogadores/cadastro_jogador";
import BrNhkNav from "../ui/nav";
import PerfisServidores from "../ui/perfis_servidores";
import RedesSociais from "../ui/redes_sociais";
import TabelaJogadores from "../ui/tabela_jogadores";

export default class Configuracao {
  constructor() {
    this.define();
    this.prepend();
  }

  private define = (): void => {
    customElements.define(BrNhkNav.tag, BrNhkNav);
    customElements.define(BotaoCadastroJogador.tag, BotaoCadastroJogador);
    customElements.define(RedesSociais.tag, RedesSociais);
    customElements.define(PerfisServidores.tag, PerfisServidores);
    customElements.define(TabelaJogadores.tag, TabelaJogadores);
  };

  private prepend = (): void => {
    window.addEventListener("DOMContentLoaded", (_: Event): void =>
      document.body.prepend(new BrNhkNav())
    );
  };
}

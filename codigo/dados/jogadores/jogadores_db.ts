import Jogador from "./modelos_jogadores";
import { Estado, Pais, Rede, Servidor } from "./enumeradores";

/**
 * A princípio, a chave de cada jogador no banco de dados será o index na lista
 * do próprio banco de dados.
 */
export const jogadoresDB: Jogador[] = [
  {
    nome: "Philippe Fanaro",
    pais: Pais.brasil,
    estado: Estado.sp,
    cidade: "São Paulo",
    contato: {
      email: "philippefanaro@gmail.com",
      telefone: 5511970286739,
    },
    nascimento: Date.UTC(1992, 6, 27),
    nivel: {
      rank: "1d",
      elo: 2300,
    },
    foto: new URL("https://imgur.com/gallery/YtxsVTy"),
    perfis: [
      {
        servidor: Servidor.ogs,
        nome: "psygo",
      },
      {
        servidor: Servidor.kgs,
        nome: "psygo",
      },
    ],
    social: [
      {
        rede: Rede.facebook,
        perfil: new URL("https://facebook.com/philippe.fanaro"),
      },
      {
        rede: Rede.reddit,
        perfil: new URL("https://www.reddit.com/user/Fanaro009"),
      },
    ],
    professor_certificado: true,
  },
];

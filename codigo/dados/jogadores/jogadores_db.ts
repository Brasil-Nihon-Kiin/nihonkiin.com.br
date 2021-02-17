import Jogador from "./modelos_jogadores";
import { Estado, Pais, Rede, Servidor } from "./enumeradores";

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
    nascimento: Date.UTC(1992, 5, 27),
    elo: 2300,
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
    ],
    professor_certificado: true,
  },
];

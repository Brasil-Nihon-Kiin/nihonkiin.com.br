export const jogadores: Jogador[] = [
  {
    nome: "Philippe Fanaro",
    pais: Pais.brasil,
    estado: Estado.sp,
    cidade: "São Paulo",
    nascimento: Date.UTC(1992, 5, 27),
    elo: 2300,
    professor_certificado: true,
    perfis: [
      {
        servidor: Servidor.ogs,
        nome: "psygo",
        ranking: Ranking.k1,
      },
      {
        servidor: Servidor.kgs,
        nome: "psygo",
        ranking: Ranking.d1,
      },
    ],
    social: [
      {
        rede: Rede.facebook,
        perfil: new URL("philippe.fanaro"),
      },
    ],
    contato: {
      email: "philippefanaro@gmail.com",
      telefone: 5511970286739,
    },
    foto: new URL("https://imgur.com/gallery/YtxsVTy"),
  },
];

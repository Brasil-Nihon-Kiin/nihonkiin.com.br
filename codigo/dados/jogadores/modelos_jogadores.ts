/**
 * Há informações que não são preenchidas quando o jogador é cadastrado pela
 * primeira vez. Ou o moderador as preenche ou elas começam com um valor
 * pré-determinado.
 *
 * Por exemplo, o usuário pode cadastrar seu próprio nível inicialmente, porém
 * o nível percebido pela Nihon Kiin é algo que será decidido pelo
 * cadastrador/moderador.
 */

import { Estado, Pais, Rede, Servidor } from "./enumeradores";

/**
 * O ID de cada jogador é implícito atualmente: será o index dele na lista de
 * jogadores. Por isso, será necessário que os moderadores não cadastrem
 * jogadores repetidamente.
 */
export default interface Jogador {
  nome: string;
  pais: Pais;
  estado: Estado;
  cidade: string;
  contato?: Contato;
  nascimento: number;
  nivel: Nivel;
  foto?: URL;
  perfis?: Perfil[];
  social?: Social[];
  /**
   * O campo [[`professor_certificado`]] deve ser preenchido com informação da
   * Nihon Kiin e não advinda do formulário.
   */
  professor_certificado: boolean;
}

export interface Perfil {
  servidor: Servidor;
  nome: string;
}

export interface Social {
  rede: Rede;
  perfil: URL;
}

export interface Contato {
  email?: string;
  telefone?: number;
}

/**
 * Esta é uma das parted do código atualmente mais incertas. Há diversas 
 * maneiras de se solucionar isso, qual delas é a correta e mais adequada?
 */
export interface Nivel {
  rank: string;
  /**
   * O [[`elo`]], no futuro, talvez devesse virar algum tipo de ranking da 
   * própria Brasil Nihon Kiin.
   */
  elo: number;
}

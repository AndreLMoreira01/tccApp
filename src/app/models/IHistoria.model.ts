import { IConquista } from './IConquista.model';
export interface IHistoria{
  idHistoria: number;
  nomehistoria: string;
  tipo: string;
  descricao: string;
  conteudo: string;
  conquistas: IConquista;
}


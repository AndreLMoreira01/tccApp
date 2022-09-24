import { IConquista } from './IConquista.model';
export interface IHistoria{
  idHistoria: number;
  nome: string;
  tipo: string;
  descricao: string;
  conteudo: string;
  conquistas: IConquista;
}


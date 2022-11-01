import { IConquista } from './IConquista.model';
export interface IHistoria{
  id: number;
  nomehistoria: string;
  tipo: string;
  descricao: string;
  conteudo: string;
  autor: string;
  imagem: string;
  conquistas: IConquista;
}


import { IConquista } from './IConquista.model';

export interface IJogo{
  idJogo: number;
  nome: string;
  descricao: string;
  conquistas: IConquista;
}

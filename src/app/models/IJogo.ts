import { IConquista } from './IConquista.model';

export interface IJogo{
  idJogo: number;
  nomejogo: string;
  descricao: string;
  conquistas: IConquista;
}

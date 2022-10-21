import { IConquista } from './IConquista.model';

export interface IJogo{
  idJogo: number;
  nomejogo: string;
  descricao: string;
  imagem: string;
  rota: string;
  conquistas: IConquista;
}

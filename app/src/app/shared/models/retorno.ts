import { IDespesa } from './despesa';

export interface Retorno{
    status:number,
    mensagem:string,
    data:IDespesa[]
  }

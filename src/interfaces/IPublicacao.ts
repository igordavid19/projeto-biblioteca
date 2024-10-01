import { IItemAcervo } from "./IItemAcervo";

export interface IPublicacao extends IItemAcervo {
    autor: string;
    anoPublicacao: number;
}
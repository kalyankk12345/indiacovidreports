import { Article } from './article';

export interface Gen {
  status:string;
  totalResults:number;
  articles:Article[];

}

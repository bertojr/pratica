import { iProduct } from './product';

export interface iJsonContent {
  products: iProduct[];
  total: number;
  skip: number;
  limit: number;
}

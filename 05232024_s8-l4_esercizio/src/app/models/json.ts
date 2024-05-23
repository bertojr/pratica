import { iPost } from './post';

export interface iJson {
  posts: iPost[];
  total: number;
  skip: number;
  limit: number;
}

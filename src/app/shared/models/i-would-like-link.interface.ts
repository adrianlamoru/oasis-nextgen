import { IPage } from '.';

export interface IWouldLikeLink {
  id?: number;
  title: string;
  text: string;
  icon: string;
  link: string;
  action?: string;
  sortOrder?: number;
  searchableText?: string;
  target: string;
}


import { IBasePage, Message, IWouldLikeLink, PageLabel } from '.';

export interface IPage extends IBasePage {
  maxIWouldLikeLinks: number;
  iWouldLikeLinks?: IWouldLikeLink[];
  pageLabels?: PageLabel[];
  alerts?: Message[];
}


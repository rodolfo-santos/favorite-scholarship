import { IKindOfStudy } from '~/models/IKindOfStudy';

export interface IQuerySearch {
  city: string;
  course: string;
  kind: string[];
  priceWithDiscount: number;
}

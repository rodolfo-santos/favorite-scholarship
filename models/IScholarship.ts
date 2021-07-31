import { ICampus } from './ICampus';
import { IUniversity } from './IUniversity';
import { ICourse } from './ICourse';

export interface IScholarship {
  fullPrice: number;
  priceWithDiscount: number;
  discountPercentage: number;
  startDate: string;
  enrollmentSemester: string;
  enabled: boolean;
  course: ICourse;
  university: IUniversity;
  campus: ICampus;
}

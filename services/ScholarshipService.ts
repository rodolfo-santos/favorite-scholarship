import db from '~/api/db';
import { IQuerySearch } from '~/models/IQuerySearch';
import { IScholarship } from '~/models/IScholarship';

export default class ScholarshipService {
  public getScholarships(query: IQuerySearch): IScholarship[] {
    return db.filter(course => {
      const foundCity: boolean = query.city === 'Todas as Cidades' ? true : course.campus.city === query.city;
      const foundCourse: boolean = query.course === 'Todos os Cursos' ? true : course.course.name === query.course;
      const foundKind: boolean = query.kind.includes(course.course.kind as string);
      const foundPrice: boolean = course.priceWithDiscount <= query.priceWithDiscount;

      return foundCity && foundCourse && foundKind && foundPrice;
    });
  }
}

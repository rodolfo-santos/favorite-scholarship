import db from '~/api/db';
import { IQuerySearch } from '~/models/IQuerySearch';
import { IScholarship } from '~/models/IScholarshop';

export default class ScholarshipService {
  public get(): IScholarship[] {
    return db;
  }
}

import { IQuerySearch } from '~/models/IQuerySearch';

export interface IScholarshipComponent extends Vue {
  query: IQuerySearch;
  kindList: string[];
}

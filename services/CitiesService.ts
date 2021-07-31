import cities from '~/api/cities';
import { ICity } from '~/models/ICity';

export default class CitiesService {
  public getCities(): ICity[] {
    return cities;
  }
}

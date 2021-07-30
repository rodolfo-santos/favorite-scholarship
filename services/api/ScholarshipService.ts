import { AxiosResponse } from 'axios';
import { IScholarship } from './../../models/IScholarshop';
import { http } from '~/services/config';

export default class ScholarshopService {
  public async getAll(limit: number): Promise<IScholarship[]> {
    const url: string = `/scholarship/?_limit=${limit}`;
    const response: AxiosResponse<IScholarship[]> = await http.get(url);
    return response.data;
  }

  public async getByFilter(filter: string): Promise<IScholarship[]> {
    const url: string = `/scholarship/?q=${filter}`;
    const response: AxiosResponse<IScholarship[]> = await http.get(url);
    return response.data;
  }

  public async getById(id: string): Promise<IScholarship> {
    const url: string = `/scholarship/${id}`;
    const response: AxiosResponse<IScholarship> = await http.get(url);
    return response.data;
  }
}

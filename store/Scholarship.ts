import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';
import { IScholarship } from '~/models/IScholarship';

@Module({ namespaced: true, stateFactory: true })
export default class Scholarship extends VuexModule {
  public favoriteScholarships: IScholarship[] = [];

  @Mutation
  public SET_FAVORITES(scholarships: IScholarship[]): void {
    this.favoriteScholarships = scholarships;
  }

  @Mutation
  public ADD_FAVORITES(scholarships: IScholarship[]): void {
    const favoritesConcated: IScholarship[] = this.favoriteScholarships.concat(scholarships);
    this.favoriteScholarships = favoritesConcated;
    this.favoriteScholarships = favoritesConcated.filter((scholarship, i) => this.favoriteScholarships.indexOf(scholarship) === i);
    localStorage.setItem('favorites_scholarships', JSON.stringify(this.favoriteScholarships));
  }

  @Mutation
  public DELETE_FAVORITE(id: number): void {
    this.favoriteScholarships = this.favoriteScholarships.filter(item => item.id !== id);
    localStorage.setItem('favorites_scholarships', JSON.stringify(this.favoriteScholarships));
  }

  @Mutation
  public DELETE_ALL_FAVORITE(): void {
    this.favoriteScholarships = [];
    localStorage.setItem('cart', JSON.stringify(this.favoriteScholarships));
  }

  @Action
  public getFavoritesListFromLocalStorage(): void {
    if (process.client) {
      const list: string | null = localStorage.getItem('favorites_scholarships');
      if (list) this.context.commit('SET_FAVORITES', JSON.parse(list));
    }
  }

  @Action
  public clearFavoriteList(): void {
    this.context.commit('DELETE_ALL_FAVORITE');
  }

  @Action
  public removeFavorite(id: number): void {
    this.context.commit('DELETE_FAVORITE', id);
  }

  @Action
  public addFavorite(scholarships: IScholarship[]): void {
    this.context.commit('ADD_FAVORITES', scholarships);
  }
}

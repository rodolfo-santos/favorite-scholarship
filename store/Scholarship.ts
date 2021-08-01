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
    this.favoriteScholarships = this.favoriteScholarships.concat(scholarships);
    localStorage.setItem('favorites_scholarships', JSON.stringify(this.favoriteScholarships));
  }

  @Mutation
  public DELETE_FAVORITE(index: number): void {
    this.favoriteScholarships.splice(index, 1);
    localStorage.setItem('favorites_scholarships', JSON.stringify(this.favoriteScholarships));
  }

  @Mutation
  public DELETE_ALL_FAVORITE(): void {
    this.favoriteScholarships = [];
    localStorage.setItem('cart', JSON.stringify(this.favoriteScholarships));
  }

  @Action
  public getFavoritesListFromLocalStorage(): void {
    const cart: string | null = localStorage.getItem('favorites_scholarships');
    if (cart) this.context.commit('SET_FAVORITES', JSON.parse(cart));
  }

  @Action
  public clearFavoriteList(): void {
    this.context.commit('DELETE_ALL_FAVORITE');
  }

  @Action
  public removeFavorite(index: number): void {
    this.context.commit('DELETE_FAVORITE', index);
  }

  @Action
  public addFavorite(scholarships: IScholarship[]): void {
    this.context.commit('ADD_FAVORITES', scholarships);
  }
}

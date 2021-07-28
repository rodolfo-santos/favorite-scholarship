import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';

@Module({ namespaced: true, stateFactory: true })
export default class ChartStore extends VuexModule {
  public breadcrumb: object[] = [];

  @Mutation
  public SET_BREADCRUMB(breadcrumb: object[]): void {
    this.breadcrumb = breadcrumb;
  }

  @Action
  public changeBreadcrumb(breadcrumb: object[]): void {
    this.context.commit('SET_BREADCRUMB', breadcrumb);
  }
}

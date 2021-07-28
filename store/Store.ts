import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';
import { ICrumb } from './../models/ICrumb';

@Module({ namespaced: true, stateFactory: true })
export default class ChartStore extends VuexModule {
  public breadcrumb: ICrumb[] = [{ name: 'Home', link: '/' }];

  @Mutation
  public SET_BREADCRUMB(breadcrumb: ICrumb[]): void {
    this.breadcrumb = breadcrumb;
  }

  @Action
  public changeBreadcrumb(breadcrumb: ICrumb[]): void {
    this.context.commit('SET_BREADCRUMB', breadcrumb);
  }
}

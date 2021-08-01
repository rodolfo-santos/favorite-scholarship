import { Wrapper, mount } from '@vue/test-utils';
import store from '~/test/mocks/StoreStub';
import Modal from '~/components/utils/Modal.vue';
import AddScholarship from '~/pages/minha-conta/bolsas-favoritas/adicionar.vue';
import ScholarshipTable from '~/components/pages/minha-conta/bolsas-favoritas/ScholarshipTable.vue';
import ScholarshipFilter from '~/components/pages/minha-conta/bolsas-favoritas/ScholarshipFilter.vue';

describe('Pages - /minha-conta/bolsas-favoritas/adicionar', () => {
  it('Should ', () => {
    const wrapper: Wrapper<Vue> = mountComponent();
  });
});

function mountComponent(): Wrapper<Vue> {
  return mount(AddScholarship, {
    stubs: {
      Modal,
      ScholarshipTable,
      ScholarshipFilter,
    },
    store,
  });
}

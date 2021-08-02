import { Wrapper, mount } from '@vue/test-utils';
import store from '~/test/mocks/StoreStub';
import Modal from '~/components/utils/Modal.vue';
import AddScholarship from '~/pages/minha-conta/bolsas-favoritas/adicionar.vue';
import ScholarshipTable from '~/components/pages/minha-conta/bolsas-favoritas/ScholarshipTable.vue';
import ScholarshipFilter from '~/components/pages/minha-conta/bolsas-favoritas/ScholarshipFilter.vue';

describe('Pages - /minha-conta/bolsas-favoritas/adicionar', () => {
  it('Should have the components: Modal, Filter and Table ', () => {
    const wrapper: Wrapper<Vue> = mountComponent();
    expect(wrapper.findComponent(Modal).exists()).toBe(true);
    expect(wrapper.findComponent(ScholarshipFilter).exists()).toBe(true);
    expect(wrapper.findComponent(ScholarshipTable).exists()).toBe(true);
  });
});

function mountComponent(): Wrapper<Vue> {
  return mount(AddScholarship, {
    data() {
      return {
        showModal: true,
      };
    },
    stubs: {
      ScholarshipTable,
      ScholarshipFilter,
      Modal,
    },
    store,
  });
}

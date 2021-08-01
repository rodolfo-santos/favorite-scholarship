<template>
  <Modal
    title="Adicionar Bolsa"
    subtitle="Filtre e adicione as bolsas de seu interesse."
    confirm-text="Adicionar bolsas"
    :show="showModal"
    :disable-confirm-button="disableConfirmButton"
    @close="closeAddModal"
    @confirm="addListToFavorites"
  >
    <ScholarshipFilter @update="updateList" />
    <ScholarshipTable :list="scholarshipList" @updateListToAdd="updateListToAdd" />
  </Modal>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { IScholarship } from '~/models/IScholarship';
import Modal from '~/components/utils/Modal.vue';
import ScholarshipTable from '~/components/pages/minha-conta/bolsas-favoritas/ScholarshipTable.vue';
import ScholarshipFilter from '~/components/pages/minha-conta/bolsas-favoritas/ScholarshipFilter.vue';

const scholarship = namespace('Scholarship');

@Component({ components: { Modal, ScholarshipTable, ScholarshipFilter } })
export default class AddScholarship extends Vue {
  public showModal: boolean = true;
  public scholarshipList: IScholarship[] = [];
  public scholarshipListToAdd: IScholarship[] = [];
  public disableConfirmButton: boolean = true;

  @scholarship.Action
  public addFavorite!: (scholarships: IScholarship[]) => void;

  @Watch('scholarshipListToAdd')
  public onupdateListToAddChanged(value: IScholarship[]) {
    if (value.length > 0) this.disableConfirmButton = false;
    else this.disableConfirmButton = true;
  }

  public closeAddModal(): void {
    this.showModal = false;
    this.$router.go(-1);
  }

  public updateList(list: IScholarship[]): void {
    this.scholarshipList = list;
  }

  public updateListToAdd(list: IScholarship[]): void {
    this.scholarshipListToAdd = list;
  }

  public addListToFavorites(): void {
    this.addFavorite(this.scholarshipListToAdd);
    this.closeAddModal();
  }
}
</script>

<style lang="scss" scoped></style>

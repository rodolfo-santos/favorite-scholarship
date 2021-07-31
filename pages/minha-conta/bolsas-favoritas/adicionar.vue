<template>
  <Modal
    title="Adicionar Bolsa"
    subtitle="Filtre e adicione as bolsas de seu interesse."
    confirm-text="Adicionar bolsas"
    :show="showModal"
    :disable-confirm-button="disableConfirmButton"
    @close="closeAddModal"
    @confirm="addCourses"
  >
    <ScholarshipFilter @update="updateList" />
    <ScholarshipTable :list="scholarshipList" @updateListToAdd="updateListToAdd" />
  </Modal>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import Modal from '~/components/utils/Modal.vue';
import ScholarshipTable from '~/components/pages/minha-conta/bolsas-favoritas/ScholarshipTable.vue';
import ScholarshipFilter from '~/components/pages/minha-conta/bolsas-favoritas/ScholarshipFilter.vue';
import { IScholarship } from '~/models/IScholarship';

@Component({ components: { Modal, ScholarshipTable, ScholarshipFilter } })
export default class AddCourse extends Vue {
  public showModal: boolean = false;
  public scholarshipList: IScholarship[] = [];
  public scholarshipListToAdd: IScholarship[] = [];
  public disableConfirmButton: boolean = true;

  @Watch('scholarshipListToAdd')
  public onupdateListToAddChanged(value: IScholarship[]) {
    if (value.length > 0) this.disableConfirmButton = false;
    else this.disableConfirmButton = true;
  }

  public mounted(): void {
    this.showAddModal();
  }

  public addCourses(): void {
    window.alert('Cursos Adicionados!');
  }

  public showAddModal(): void {
    this.showModal = true;
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
}
</script>

<style lang="scss" scoped></style>

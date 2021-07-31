<template>
  <Modal
    title="Adicionar Bolsa"
    subtitle="Filtre e adicione as bolsas de seu interesse."
    confirm-text="Adicionar bolsas"
    :show="showModal"
    @close="closeAddModal"
    @confirm="addCourses"
  >
    <ScholarshipFilter @update="updateScholarshipList" />
    <ScholarshipTable :list="scholarshipList" />
  </Modal>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Modal from '~/components/utils/Modal.vue';
import ScholarshipTable from '~/components/pages/minha-conta/bolsas-favoritas/ScholarshipTable.vue';
import ScholarshipFilter from '~/components/pages/minha-conta/bolsas-favoritas/ScholarshipFilter.vue';
import { IScholarship } from '~/models/IScholarship';

@Component({ components: { Modal, ScholarshipTable, ScholarshipFilter } })
export default class AddCourse extends Vue {
  public showModal: boolean = false;
  public scholarshipList: IScholarship[] = [];

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

  public updateScholarshipList(list: IScholarship[]): void {
    console.log(list);
    this.scholarshipList = list;
  }
}
</script>

<style lang="scss" scoped></style>

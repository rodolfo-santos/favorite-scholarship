<template>
  <Modal
    title="Adicionar Bolsa"
    subtitle="Filtre e adicione as bolsas de seu interesse."
    confirm-text="Adicionar bolsas"
    :show="showModal"
    @close="closeAddModal"
    @confirm="addCourses"
  >
    <div class="grid mb-4">
      <InputSelect :value.sync="city" :options="cityOptions" label="Selecione sua cidade" class="grid-box" />
      <InputSelect :value.sync="course" :options="courseOptions" label="Selecione o curso de sua preferência" class="grid-box" />
      <div class="grid-box">
        <label class="text-bold text-uppercase d-flex mb-1">Como você quer estudar?</label>
        <div class="d-flex">
          <InputCheckBox id="face=to=face-check" label="Presencial" class="mt-4 mr-4" :value.sync="kindOfStudy.faceToface" />
          <InputCheckBox id="distance-check" label="A distância" class="mt-4" :value.sync="kindOfStudy.distance" />
        </div>
      </div>

      <InputRange :price.sync="price" class="w-100" />
    </div>
    <ScholarshipTable />
  </Modal>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Modal from '~/components/utils/Modal.vue';
import CitiesService from '~/services/CitiesService';
import CoursesService from '~/services/CoursesService';
import { ICourse } from '~/models/ICourse';
import InputRange from '~/components/utils/InputRange.vue';
import InputCheckBox from '~/components/utils/InputCheckbox.vue';
import InputSelect from '~/components/utils/InputSelect.vue';
import ScholarshipTable from '~/components/pages/minha-conta/bolsas-favoritas/ScholarshipTable.vue';

type option = { label: string; id: string };

@Component({ components: { Modal, InputRange, ScholarshipTable, InputCheckBox, InputSelect } })
export default class AddCourse extends Vue {
  public citiesService = new CitiesService();
  public coursesService = new CoursesService();

  public showModal: boolean = false;
  public city: option = { label: '', id: '' };
  public cityOptions: option[] = [];
  public course: option = { label: '', id: '' };
  public courseOptions: option[] = [];

  public kindOfStudy = {
    faceToface: false,
    distance: false,
  };

  public price: number = 200;

  public mounted(): void {
    this.getCities();
    this.getCourses();
    this.showAddModal();
  }

  public getCities(): void {
    this.cityOptions = this.citiesService.getCities();
    this.city = this.cityOptions[0];
  }

  public getCourses(): void {
    const courses: ICourse[] = this.coursesService.getCourses();
    this.courseOptions = courses.map(course => {
      return { id: course.id, label: course.name };
    });
    this.course = this.courseOptions[0];
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
}
</script>

<style lang="scss" scoped></style>

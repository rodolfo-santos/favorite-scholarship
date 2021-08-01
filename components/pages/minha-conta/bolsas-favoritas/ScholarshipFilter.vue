<template>
  <div class="grid mb-4">
    <InputSelect :value.sync="city" :options="cityOptions" label="Selecione sua cidade" class="grid-box" />
    <InputSelect :value.sync="course" :options="courseOptions" label="Selecione o curso de sua preferência" class="grid-box" />
    <div class="grid-box">
      <label class="text-bold text-uppercase d-flex mb-1">Como você quer estudar?</label>
      <div class="d-flex">
        <InputCheckBox label="Presencial" class="mt-4 mr-4" :value.sync="kindOfStudy.faceToface" />
        <InputCheckBox label="A distância" class="mt-4" :value.sync="kindOfStudy.distance" />
      </div>
    </div>

    <InputRange :price.sync="price" class="w-100" min="200" max="1500" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { debounceFn } from 'debounce-decorator-ts';
import { ICourse } from '~/models/ICourse';
import { IQuerySearch } from '~/models/IQuerySearch';
import { IKindOfStudy } from '~/models/IKindOfStudy';
import CitiesService from '~/services/CitiesService';
import CoursesService from '~/services/CoursesService';
import ScholarshipService from '~/services/ScholarshipService';
import InputRange from '~/components/utils/InputRange.vue';
import InputCheckBox from '~/components/utils/InputCheckbox.vue';
import InputSelect from '~/components/utils/InputSelect.vue';

type option = { label: string; id: string };

@Component({ components: { InputSelect, InputCheckBox, InputRange } })
export default class ScholarshipFilter extends Vue {
  public citiesService = new CitiesService();
  public coursesService = new CoursesService();
  public scholarshipService = new ScholarshipService();

  public price: number = 10000;
  public city: option = { label: '', id: '' };
  public cityOptions: option[] = [];
  public course: option = { label: '', id: '' };
  public courseOptions: option[] = [];

  public kindOfStudy: IKindOfStudy = {
    faceToface: true,
    distance: true,
  };

  public get kindList(): string[] {
    const list: string[] = [];
    if (this.kindOfStudy.faceToface) list.push('Presencial');
    if (this.kindOfStudy.distance) list.push('EaD');

    return list;
  }

  @Watch('query')
  public onQUeryChanged(): void {
    this.getScholarships();
  }

  public get query(): IQuerySearch {
    return {
      city: this.city.label,
      course: this.course.label,
      kind: this.kindList,
      priceWithDiscount: this.price,
    };
  }

  public mounted(): void {
    this.getCities();
    this.getCourses();
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

  @debounceFn(500)
  public getScholarships(): void {
    const filteredScholarships = this.scholarshipService.getScholarships(this.query);
    this.$emit('update', filteredScholarships);
  }
}
</script>

<style lang="scss" scoped></style>

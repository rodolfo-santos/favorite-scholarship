<template>
  <main class="container">
    <Title title="Bolsas favoritas" />
    <nav class="semesters d-flex my-4">
      <ul class="d-flex right text-bold text-primary-variant w-100">
        <li
          v-for="(option, index) in semestersOptions"
          :key="index"
          class="semesters__item px-4 py-2 w-100 w-md-auto"
          @click="changeSemester($event, option)"
        >
          {{ option }}
        </li>
      </ul>
    </nav>
    <div class="grid">
      <AddScholarshipCard />
      <ScholarshipCard v-for="(scholarship, index) in filteredFavoriteScholarships" :key="index" :data="scholarship" :index="index" />
    </div>
    <NuxtChild />
  </main>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { ICrumb } from '~/models/ICrumb';
import Title from '~/components/utils/Title.vue';
import AddScholarshipCard from '~/components/pages/minha-conta/bolsas-favoritas/AddScholarshipCard.vue';
import ScholarshipCard from '~/components/pages/minha-conta/bolsas-favoritas/ScholarshipCard.vue';
import { IScholarship } from '~/models/IScholarship';

const scholarship = namespace('Scholarship');
const breadcrumb = namespace('Breadcrumb');

@Component({ components: { Title, AddScholarshipCard, ScholarshipCard } })
export default class BolsasFavoritas extends Vue {
  public breadcrumb: ICrumb[] = [
    { name: 'Home', link: '/' },
    { name: 'Minha Conta', link: '/minha-conta' },
    { name: 'Bolsas Favoritas', link: '/minha-conta/bolsas-favoritas' },
  ];

  public semestersOptions: string[] = ['Todos os Semestres', '2º semestre de 2019', '1º semestre de 2020'];
  public semester: string = 'Todos os Semestres';

  @scholarship.State
  public favoriteScholarships!: IScholarship[];

  @breadcrumb.Action
  public changeBreadcrumb!: (breadcrumbs: ICrumb[]) => void;

  @scholarship.Action
  public getFavoritesListFromLocalStorage!: () => void;

  public get filteredFavoriteScholarships(): IScholarship[] {
    const list: IScholarship[] = this.favoriteScholarships.filter(scholarship => {
      const mouth: number = Number(scholarship.startDate.split('/')[1]);
      const year: number = Number(scholarship.startDate.split('/')[2]);

      const isFirstSemester: boolean = mouth >= 1 && mouth <= 6;
      const isSecondSemester: boolean = mouth >= 7 && mouth <= 12;

      if (this.semester === 'Todos os Semestres') return true;
      if (this.semester === '2º semestre de 2019' && isSecondSemester && year === 2019) return true;
      if (this.semester === '1º semestre de 2020' && isFirstSemester && year === 2020) return true;
      return false;
    });
    return list;
  }

  public created(): void {
    this.changeBreadcrumb(this.breadcrumb);
    this.getFavoritesListFromLocalStorage();
  }

  public changeSemester($event: Event, option: string): void {
    document.querySelector('.semesters__item--active')?.classList.remove('semesters__item--active');
    ($event.target as HTMLElement).classList.add('semesters__item--active');
    this.semester = option;
  }
}
</script>

<style lang="scss" scoped>
.semesters {
  &__item {
    border-left: 2px solid $primary-variant;
    border-right: 2px solid $primary-variant;
    border-bottom: 2px solid $primary-variant;
    cursor: pointer;

    &--active {
      background: $primary-variant;
      color: #fff;
    }

    &:first-child {
      border-top: 2px solid $primary-variant;
      border-radius: 5px 5px 0px 0px;
    }

    &:last-child {
      border-radius: 0px 0px 5px 5px;
    }
  }
}

.grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 25px;
}

@include medium {
  .semesters__item {
    border-top: 2px solid $primary-variant;
    border-left: none;
    border-right: 2px solid $primary-variant;
    border-bottom: 2px solid $primary-variant;
    cursor: pointer;
    transition: 0.25s;

    &:not(.semesters__item--active):hover {
      background-color: #eeeeee;
    }

    &:first-child {
      border-left: 2px solid $primary-variant;
      border-radius: 5px 0px 0px 5px;
    }

    &:last-child {
      border-radius: 0px 5px 5px 0px;
    }
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}

@include large {
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
}

@include extra-large {
  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>

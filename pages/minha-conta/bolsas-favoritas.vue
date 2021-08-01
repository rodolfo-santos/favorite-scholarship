<template>
  <main class="container">
    <Title title="Bolsas favoritas" />
    <nav class="d-flex my-4">
      <ul class="d-flex right text-bold text-primary-variant w-100">
        <li class="px-4 py-2 w-100 w-md-auto" @click="changeSemester($event)">Todos os Semestres</li>
        <li class="px-4 py-2 w-100 w-md-auto" @click="changeSemester($event)">2º semestre de 2019</li>
        <li class="px-4 py-2 w-100 w-md-auto" @click="changeSemester($event)">1º semestre de 2020</li>
      </ul>
    </nav>
    <div class="grid">
      <AddScholarshipCard class="card-grid" @click="openAddModal()" />
      <ScholarshipCard
        v-for="(scholarship, index) in favoriteScholarships"
        :key="index"
        :data="scholarship"
        :index="index"
        class="card-grid"
      />
    </div>
    <NuxtChild />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { ICrumb } from '~/models/ICrumb';
import Title from '~/components/utils/Title.vue';
import AddScholarshipCard from '~/components/pages/minha-conta/bolsas-favoritas/AddScholarshipCard.vue';
import ScholarshipCard from '~/components/pages/minha-conta/bolsas-favoritas/ScholarshipCard.vue';
import { IScholarship } from '~/models/IScholarship';

const scholarship = namespace('Scholarship');
const store = namespace('Store');

@Component({ components: { Title, AddScholarshipCard, ScholarshipCard } })
export default class BolsasFavoritas extends Vue {
  public breadcrumb: ICrumb[] = [
    { name: 'Home', link: '/' },
    { name: 'Minha Conta', link: '/minha-conta' },
    { name: 'Bolsas Favoritas', link: '/minha-conta/bolsas-favoritas' },
  ];

  @scholarship.State
  public favoriteScholarships!: IScholarship[];

  @store.Action
  public changeBreadcrumb!: (breadcrumbs: ICrumb[]) => void;

  @scholarship.Action
  public getFavoritesListFromLocalStorage!: () => void;

  public created(): void {
    this.changeBreadcrumb(this.breadcrumb);
    this.getFavoritesListFromLocalStorage();
  }

  public changeSemester($event: Event): void {
    document.querySelector('li.active')?.classList.remove('active');
    ($event.target as HTMLElement).classList.add('active');
  }

  public openAddModal(): void {
    this.$router.push('/minha-conta/bolsas-favoritas/adicionar');
  }
}
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 25px;
}

ul {
  padding: 0;
  list-style: none;
}

.active {
  background: $primary-variant;
  color: #fff;
}

li {
  border-left: 2px solid $primary-variant;
  border-right: 2px solid $primary-variant;
  border-bottom: 2px solid $primary-variant;
  cursor: pointer;
}

li:first-child {
  border-top: 2px solid $primary-variant;
  border-radius: 5px 5px 0px 0px;
}

li:last-child {
  border-radius: 0px 0px 5px 5px;
}

@include medium {
  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  li {
    border-top: 2px solid $primary-variant;
    border-left: none;
    border-right: 2px solid $primary-variant;
    border-bottom: 2px solid $primary-variant;
    cursor: pointer;
    transition: 0.25s;

    &:not(.active):hover {
      background-color: #eeeeee;
    }
  }

  li:first-child {
    border-left: 2px solid $primary-variant;
    border-radius: 5px 0px 0px 5px;
  }

  li:last-child {
    border-radius: 0px 5px 5px 0px;
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

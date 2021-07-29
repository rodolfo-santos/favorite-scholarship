<template>
  <div class="overlay d-flex center">
    <div class="card">
      <div class="card-header">
        <i class="fas fa-times close-button text-white"></i>
        <h1 class="mb-1">Adicionar bolsa</h1>
        <p class="text-muted">Filtre e adicione as bolsas de seu interesse.</p>
      </div>

      <div class="card-body">
        <div class="filter">
          <InputSelect v-model="city" :options="cityOptions" label="Selecione sua cidade" class="input-select" />
          <InputSelect v-model="course" :options="courseOptions" label="Selecione o curso de sua preferência" class="input-select" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import InputSelect from './InputSelect.vue';

type option = { label: string; id: string };

@Component({ components: { InputSelect } })
export default class Modal extends Vue {
  public city: string = 'São José dos Campos';
  public cityOptions: option[] = [
    {
      label: 'São José dos Campos',
      id: 'sjc',
    },
    {
      label: 'Jacareí',
      id: 'jacarei',
    },
    {
      label: 'Caçapava',
      id: 'cacapava',
    },
    {
      label: 'Taubaté',
      id: 'taubate',
    },
  ];

  public course: string = 'Engenharia';
  public courseOptions: option[] = [
    {
      label: 'Engenharia',
      id: 'engenharia',
    },
    {
      label: 'Administração',
      id: 'administracao',
    },
    {
      label: 'Psicologia',
      id: 'psicologia',
    },
  ];
}
</script>

<style lang="scss" scoped>
.overlay {
  z-index: 99;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(#000000, $alpha: 0.7);
}

.card {
  height: 100%;
  width: 100%;
  max-height: 700px;
  max-width: 900px;
  background-color: #ffffff;

  position: relative;
  padding: 50px;
}

.card-header {
  margin-bottom: 50px;
}

.close-button {
  position: absolute;
  right: 0;
  top: -50px;
  font-size: 3em;
}

.filter {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
}

.input-select {
  width: auto;
  &:nth-child(odd) {
    grid-column: 1;
  }
  &:nth-child(even) {
    grid-column: 2;
  }
}
</style>

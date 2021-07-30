<template>
  <transition v-if="show" name="fade" mode="out-in">
    <div class="overlay d-flex center" @click.self="closeModal">
      <div class="card">
        <div class="card-header">
          <i class="fas fa-times close-button text-white" @click="closeModal"></i>
          <h1 class="mb-1">Adicionar bolsa</h1>
          <p>Filtre e adicione as bolsas de seu interesse.</p>
        </div>

        <div class="card-body">
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
        </div>

        <div class="d-flex right card-footer mt-4">
          <button class="mr-4">Cancelar</button>
          <button class="bg-primary text-white">Adicionar bolsa(s)</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import ScholarshipTable from '../pages/minha-conta/bolsas-favoritas/ScholarshipTable.vue';
import InputSelect from './InputSelect.vue';
import InputCheckBox from './InputCheckbox.vue';
import InputRange from './InputRange.vue';
type option = { label: string; id: string };

@Component({ components: { InputSelect, InputCheckBox, InputRange, ScholarshipTable } })
export default class Modal extends Vue {
  @Prop({ required: true }) show!: boolean;
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

  public kindOfStudy = {
    faceToface: false,
    distance: false,
  };

  public price: number = 200;

  @Watch('show')
  public onShowChanged() {
    const body: HTMLElement = document.querySelector('body') as HTMLElement;
    if (this.show) {
      body.style.overflowY = 'hidden';
      body.style.paddingRight = '10px';
    } else {
      body.style.overflowY = 'auto';
      body.style.paddingRight = '0px';
    }
  }

  public mounted(): void {}

  public disableOverflowBody(): void {}

  public closeModal(): void {
    this.$emit('close');
  }
}
</script>

<style lang="scss">
.overlay {
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(#000000, $alpha: 0.7);
}

.card {
  width: 100%;
  height: 800px;
  max-width: 900px;
  background-color: #ffffff;
  overflow-y: auto;

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
  cursor: pointer;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
}

.grid-box {
  width: auto;
  &:nth-child(odd) {
    grid-column: 1;
  }
  &:nth-child(even) {
    grid-column: 2;
  }
}
</style>

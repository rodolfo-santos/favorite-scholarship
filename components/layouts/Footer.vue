<template>
  <footer class="bg-primary-variant">
    <div class="container d-flex-between">
      <FooterWidget
        v-for="(widget, index) in widgets"
        :key="index"
        :icon="widget.icon"
        :text="widget.text"
        :description="widget.description"
      />
    </div>
    <div class="d-flex bg-primary">Feito com <i class="far fa-heart"></i> pela Quero Educação</div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { IWidgetFooter } from '~/models/IWidgetFooter';
import FooterWidget from './Footer/FooterWiget.vue';

@Component({ components: { FooterWidget } })
export default class Footer extends Vue {
  public widgets: IWidgetFooter[] = [
    {
      icon: 'fab fa-whatsapp',
      text: '0800 123 2222',
      description: 'Seg - Sex 8h-22h',
    },
    {
      icon: 'far fa-comments',
      text: 'Chat ao vivo',
      description: 'Seg - Sex 8h-22h',
    },
    {
      icon: 'far fa-envelope',
      text: 'Mande um e-mail',
      description: 'Respondemos rapidinho',
    },
    {
      icon: 'far fa-question-circle',
      text: 'Central de Ajuda',
      description: 'Encontre todas as respostas',
    },
  ];
}
</script>

<style lang="scss" scoped>
footer .container {
  height: 200px;
}
</style>

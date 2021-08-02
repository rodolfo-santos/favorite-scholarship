<template>
  <footer class="footer mt-4">
    <div class="footer__top xl-container d-flex between">
      <FooterWidget
        v-for="(widget, index) in widgets"
        :key="index"
        :icon="widget.icon"
        :text="widget.text"
        :short-text="widget.shortText"
        :description="widget.description"
        :fixed-large-content="widget.fixed"
        class="footer__widget"
      />
    </div>
    <div class="d-flex center bg-primary text-white footer__bottom">Feito com <i class="far fa-heart mx-1"></i> pela Quero Educação</div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FooterWidget from './components/FooterWiget.vue';
import { IWidgetFooter } from '~/models/IWidgetFooter';

@Component({ components: { FooterWidget } })
export default class Footer extends Vue {
  public widgets: IWidgetFooter[] = [
    {
      icon: 'fab fa-whatsapp',
      text: '0800 123 2222',
      shortText: '0800 123 2222',
      description: 'Seg - Sex 8h-22h',
      fixed: true,
    },
    {
      icon: 'far fa-comments',
      text: 'Chat ao vivo',
      shortText: 'Chat',
      description: 'Seg - Sex 8h-22h',
    },
    {
      icon: 'far fa-envelope',
      text: 'Mande um e-mail',
      shortText: 'E-mail',
      description: 'Respondemos rapidinho',
    },
    {
      icon: 'far fa-question-circle',
      text: 'Central de Ajuda',
      shortText: 'Ajuda',
      description: 'Encontre todas as respostas',
    },
  ];
}
</script>

<style lang="scss" scoped>
.footer {
  background: $primary;

  &__top,
  &__bottom {
    height: 200px;
  }

  &__widget {
    margin: 2px;

    &:nth-child(1) {
      width: 100%;
    }

    &:not(.footer__widget:nth-child(1)) {
      flex: 1;
    }
  }
}

@include extra-large {
  .footer {
    background: $primary-variant;

    &__top {
      min-height: 150px;
    }

    &__widget:nth-child(1) {
      flex: 1;
    }
  }
}
</style>

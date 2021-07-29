<template>
  <footer class="mt-4">
    <div class="xl-container d-flex between footer-top">
      <FooterWidget
        v-for="(widget, index) in widgets"
        :key="index"
        :icon="widget.icon"
        :text="widget.text"
        :short-text="widget.shortText"
        :description="widget.description"
        :fixed-large-content="widget.fixed"
        class="footer-widget"
      />
    </div>
    <div class="d-flex center bg-primary text-white footer-bottom">Feito com <i class="far fa-heart mx-1"></i> pela Quero Educação</div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FooterWidget from './Footer/FooterWiget.vue';
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
footer {
  background: $primary;

  .container {
    height: 200px;
  }
}

.footer-widget {
  margin: 2px;
}

.footer-widget:nth-child(1) {
  width: 100%;
}
.footer-widget:not(.footer-widget:nth-child(1)) {
  flex: 1;
}

.footer-bottom {
  height: 200px;
}

@include extra-large {
  footer {
    background: $primary-variant;
  }

  .footer-top {
    min-height: 150px;
  }

  .footer-widget:nth-child(1) {
    width: auto;
    flex: 1;
  }
}
</style>

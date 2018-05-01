<!-- san-xui button in vue -->
<template>
  <span class="san-xui h-button"></span>
</template>

<script>
import san from 'san';
import {Button, Toast} from 'san-xui';

export default {
  props: ['skin', 'size', 'icon', 'disabled', 'text', 'toast'],
  mounted() {
    let {skin, size, icon, disabled, text, toast} = this;
    const App = san.defineComponent({
      template: `<template>
        <ui-button skin="${skin}" size="${size}" icon="${icon}" disabled="{{${disabled}}}" on-click="onBtnClick">${text}</ui-button>
      </template>`,
      components: {
        'ui-button': Button
      },
      onBtnClick() {
        if (toast) {
          Toast.success(toast);
        }
      }
    });
    const app = new App();
    app.attach(this.$el);
  }
}
</script>

<style lang="scss">
  .san-xui.h-button {
    &>div {
      display: inline-block;
    }
  }
</style>


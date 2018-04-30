
<template>
  <div></div>
</template>

<script>
export default {
  props: ['skin', 'size', 'icon', 'disabled', 'text'],
  mounted() {
    let {skin, size, icon, disabled, text} = this;
    Promise.all([
      import ('san-xui'),
      import ('san'),
      import('lodash')
    ]).then(([xui, san]) => {
      const {Button, alert} = xui;
      const App = san.defineComponent({
        template: `<template>
          <ui-button skin="${skin}" size="${size}" icon="${icon}" disabled="{{${disabled}}}" on-click="onBtnClick">${text}</ui-button>
        </template>`,
        components: {
          'ui-button': Button
        },
        onBtnClick() {
          alert(text);
        }
      });
      const app = new App();
      app.attach(this.$el);
    });
  },
  data() {
    return {
      ttt: 1
    }
  }
}
</script>

<!-- san-xui textbox in vue -->
<template>
  <span class="san-xui h-textbox"></span>
</template>

<script>
const props = ["disabled", "placeholder", "width", "value", "type"];

export default {
  props,
  mounted() {
    Promise.all([import("san"), import("san-xui"), import("lodash")]).then(
      ([san, { TextBox }, _]) => {
        let attrs = "";
        _.default.forEach(props, attr => {
          let currentStr = "";
          if (this[attr]) {
            currentStr = attr + '="' + this[attr] + '" ';
            if (["width", "disabled"].indexOf(attr) > -1) {
              currentStr = attr + '="{{' + this[attr] + '}}" ';
            }
          }
          attrs += currentStr;
        });
        const App = san.defineComponent({
          template: `<template>
            <ui-textbox ${attrs} />
          </template>`,
          components: {
            "ui-textbox": TextBox
          }
        });
        const app = new App();
        app.attach(this.$el);
      }
    );
  }
};
</script>


<!-- 暂时停用 -->

<template>
    <div class="colorBox" :style="{backgroundColor: color}" :data-clipboard-text="color">
        <p>{{color}}</p><p>{{text}}</p>
    </div>
</template>

<script>
export default {
  props: ["color", "text"],
  mounted() {
    import("clipboard").then(cb => {
      new cb.default(".colorBox");
    });
  }
};
</script>

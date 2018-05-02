<template>
</template>

<script>
export default {
  mounted() {
    import("clipboard").then(cb => {
      new cb.default(".colorBox");
    });
  }
};
</script>

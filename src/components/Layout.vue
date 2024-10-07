<!-- src/components/Layout.vue -->
<template lang="pug">
  .flex
    SideMenu
    .main.flex.flex-column.align-items-stretch
      Header
      slot

</template>

<script>
import SideMenu from "./SideMenu.vue";
import Header from "./Header.vue";

export default {
  name: "Layout",
  components: {
    SideMenu,
    Header,
  },
};
</script>

<style lang="scss" scoped>
.main {
  flex: 1;
}
</style>

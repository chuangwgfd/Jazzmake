<!-- src/components/Layout.vue -->
<template lang="pug">
  div
    SideMenu
    slot

</template>

<script>
import SideMenu from './SideMenu.vue';
export default {
  name: 'Layout',
  components: {
    SideMenu
  }
}
</script>

<style scoped>

</style>

<template lang="pug">
  .Header.flex.justify-content-end.bg-secondary
    .flex.flex-column
      img(src="@/assets/images/爵仕美Logo-03.png")
      .account.flex.justify-content-end.align-items-center
        Icon.icon(icon="mdi:account-circle-outline")
        span A003_Hau
        Icon.icon(icon="mdi:hamburger-menu")
</template>

<script>
import { Icon } from '@iconify/vue2'

export default {
  name: 'Header',
  components: {
    Icon
  }
}
</script>

<style lang="scss" scoped>
  .Header {
    height: 110px;
    padding: 1rem;

    img {
      height: 30px;
      margin: .75rem 0;
    }
    .account {
      gap: .5rem;
    }

    .icon {
      font-size: 24px;
    }
  }

</style>


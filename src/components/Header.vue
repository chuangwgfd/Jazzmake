<template lang="pug">
  .Header.flex.justify-content-end.bg-secondary
    .flex.flex-column
      img.logo(src="@/assets/images/爵仕美Logo-03.png")
      .account.flex.justify-content-end.align-items-center
        img.user(:src="img")
        span A003_Hsu
        Icon.icon(icon="mdi:hamburger-menu")
</template>

<script>
import { Icon } from '@iconify/vue2'
import img from '../assets/images/user.svg'

export default {
  name: 'Header',
  components: {
    Icon
  },
  data() {
    return {
      img
    }
  },
}
</script>

<style lang="scss" scoped>
  .Header {
    height: 110px;
    padding: 1rem;

    .logo {
      height: 30px;
      margin: .75rem 0;
    }
    .account {
      gap: .5rem;
    }

    .user {
      width: 30px;
    }

    .icon {
      font-size: 24px;
    }
  }

</style>


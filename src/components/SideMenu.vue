<template lang="pug">
  .SideMenu.bg-side.card-shadow
    img(src="@/assets/images/爵仕美Logo-04.png")
    el-menu.bg-side(default-active="2")
      el-menu-item.side-menu-item.text-white(index="1")
        Icon.icon(icon="mdi:shield-alert-outline")
        span 權限管理
      el-menu-item.side-menu-item.text-white(index="2")
        Icon.icon(icon="mdi:account-plus-outline")
        span 看診資訊
      el-menu-item.side-menu-item.text-white(index="3")
        Icon.icon(icon="mdi:calendar-month-outline")
        span 預約管理
      el-menu-item.side-menu-item.text-white(index="4")
        Icon.icon(icon="mdi:file-table-outline")
        span 病例查詢
      el-menu-item.side-menu-item.text-white(index="5")
        Icon.icon(icon="mdi:cog-outline")
        span 系統設定
    
</template>

<script>
import { Icon } from "@iconify/vue2";

export default {
  name: "SideMenu",
  components: {
    Icon,
  },
};
</script>

<style lang="scss" scoped>
.SideMenu {
  width: 250px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  // padding: .5rem;
  z-index: 100;
  img {
    margin: 42px 0;
  }
}
</style>

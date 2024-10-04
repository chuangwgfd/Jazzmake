<template lang="pug">
  .SideMenu.bg-side
    img(src="@/assets/images/爵仕美Logo-04.png")
    el-menu.bg-side
      el-menu-item.side-menu-item.text-white 權限管理
      el-menu-item.side-menu-item.text-white 看診資訊
      el-menu-item.side-menu-item.text-white 預約管理
      el-menu-item.side-menu-item.text-white 病例查詢
      el-menu-item.side-menu-item.text-white 系統設定
    
</template>

<script>
export default {
  name: 'SideMenu',

}
</script>

<style lang="scss" scoped>
  .SideMenu {
    width: 250px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    img {
      margin: 42px 0;
    }
  }

</style>


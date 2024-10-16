<template lang="pug">
  .SideMenu.bg-side.card-shadow
    img.pointer(src="@/assets/images/爵仕美Logo-04.png" @click="$router.push('/main')")
    el-menu.bg-side(default-active="1")
      el-menu-item.side-menu-item.text-white(index="1" @click="$router.push('/main')")
        img.icon(:src="svg1")
        span 權限管理
      el-menu-item.side-menu-item.text-white(index="2" @click="$router.push('/progress')")
        img.icon(:src="svg2")
        span 看診資訊
      el-menu-item.side-menu-item.text-white(index="3")
        img.icon(:src="svg3")
        span 預約管理
      el-menu-item.side-menu-item.text-white(index="4")
        img.icon(:src="svg4")
        span 病例查詢
      el-menu-item.side-menu-item.text-white(index="5")
        img.icon(:src="svg5")
        span 系統設定
    
</template>

<script>
import { Icon } from "@iconify/vue2";
import svg1 from "../assets/images/permission.svg"
import svg2 from "../assets/images/customer.svg"
import svg3 from "../assets/images/calender.svg"
import svg4 from "../assets/images/case.svg"
import svg5 from "../assets/images/set.svg"

export default {
  name: "SideMenu",
  components: {
    Icon,
  },
  data() {
    return {
      svg1,
      svg2,
      svg3,
      svg4,
      svg5,
    }
  },
  methods: {
    handleClick() {
      this.$router.push("/camera");
    },
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
  >img {
    margin: 42px 0;
  }
}
</style>

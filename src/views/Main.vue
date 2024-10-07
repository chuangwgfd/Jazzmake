<template lang="pug">
  Layout
    .main.bg-primary
      .grid.grid-cols-3
        .card.card-shadow.bg-white.flex.flex-column.center-center(v-for="(item, i) in cardItems" :key="i" @click="handleLogout")
          label {{ item.label }}
    
</template>

<script>
import Layout from "@/components/Layout.vue";

export default {
  name: "Main",
  components: {
    Layout,
  },
  data() {
    return {
      cardItems: [
        { label: "倉存管理", icon: "" },
        { label: "監視系統", icon: "" },
        { label: "財務報表", icon: "" },
        { label: "藥品採購", icon: "" },
        { label: "出勤查詢", icon: "" },
        { label: "人事管理", icon: "" },
      ],
    };
  },
  methods: {
    handleLogout() {
      // 在這裡處理登出邏輯
      console.log("Logging out");
      // 重定向到 Login 頁面
      this.$router.push("/camera");
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  // height: 100%;
  .grid {
    justify-items: center;
    padding: 3rem;
  }
  .card {
    font-family: "Helvetica", "Arial", "Microsoft JhengHei", sans-serif;
    font-weight: bold;
    width: 200px;
    height: 150px;
    margin: 2.5rem 0;
    border-radius: 1.5rem;
    cursor: pointer;
    transition: transform 0.3s ease;
    backface-visibility: hidden;
    &:hover {
      transform: scale(103%);
    }
  }
}
</style>

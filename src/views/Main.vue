<template lang="pug">
  <div class="main">
    <h1>Main Page</h1>
    <p>Welcome to the main page!</p>
    <el-button type="danger" @click="handleLogout">Logout</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    handleLogout() {
      // 在這裡處理登出邏輯
      console.log('Logging out');
      // 重定向到 Login 頁面
      this.$router.push('/');
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  max-width: 500px;
  margin: auto;
}
</style>

<template lang="pug">
  <div class="login bg-primary">
    .login__form.bg-white.card-shadow
      h3.text-center.text-primary 後台系統
      el-input.input-primary(placeholder="使用者帳號" v-model="username")
      el-input.input-primary(placeholder="使用者密碼" type="password" v-model="password" @keyup.enter.native="handleLogin")
      el-button.login__button.button-primary(@click="handleLogin") 登入

    img.login__logo(src="@/assets/images/爵仕美Logo-01.png")
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    handleLogin() {
      // 在這裡處理登錄邏輯
      console.log('Logging in with', this.username, this.password);
      // 成功後重定向到 Main 頁面
      this.$router.push('/main');
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  position: relative;
  width: 100%;
  height: 100vh;

  &__form {
    position: absolute;
    top: 50%;
    left: 200px;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 470px;
    padding: 36px 48px;
    border-radius: 1rem;

    h3 {
      font-size: 20px;
      font-weight: 500;
      margin-bottom: 24px;
    }
  }

  &__button {
    width: 40%;
    margin-top: 24px;
  }

  &__logo {
    position: absolute;
    bottom: 10%;
    right: 100px;
    width: 380px;
  }
}
</style>

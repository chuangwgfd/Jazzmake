<template lang="pug">
  Layout
    .Camera.bg-white
      .menu.flex
        template(v-for="(item, i) in cardItems")
          .menu-item(:key="i" :class="i === 1 && 'active'") {{ item.label }}
      .table
        .t-header.flex
          .cell.date
            span 日期
          .cell.camera
            span 攝影機畫面
          .cell.input
            el-input(placeholder="查詢其他日期")
        .t-body.flex.flex-column(v-show="queryOn")
          template(v-for="(row, i) in tableData")
            .row.flex
              .cell
                span {{ row.date }}
              template(v-for="(item, i) in 8")
                .cell
                  .link(@click="handleCamera") {{ `Camera${i+1}` }}
      .page.flex.center-center.bg-white(v-show="queryOn")
        el-pagination(layout="prev, pager, next" :total="50")
    
    el-dialog(
      :visible="isQueryDialogOpen"
      width="400px"
      title="監視器畫面查詢"
      custom-class="dialog-primary"
      top="30vh"
    )
      .wrap.flex.flex-column.center-center
        el-select.select-primary(
          ref="querySelect"
          placeholder="請選擇欲查看時間"
          v-model="value"
          @keyup.enter.native="handleQuery"
          @keydown.enter.native="disableVisible"
        )
          el-option.option-primary(v-for="(item, i) in options" :key="i" :label="item.label" :value="item.value")
        el-button.button-primary.mt-1(@click="handleQuery") 前往查詢

    el-dialog(
      :visible="isCameraDialogOpen"
      :before-close="handleCloseCameraDialog"
      custom-class="dialog-primary"
      width="840px"
      top="10vh"
    )
      .wrap
        .videoHidden
        <iframe width="800" height="450" src="https://www.youtube.com/embed/fcoq60SjBIs?si=bN9vohfOIabXQcU1&autoplay=1&rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        

    el-dialog(
      :visible="isLoginDialogOpen"
      :before-close="handleClose"
      width="400px"
      custom-class="dialog-primary"
      top="30vh"
    )
      el-dialog(
        :visible="isErrorDialogOpen"
        width="300px"
        custom-class="dialog-error"
        :show-close="false"
        top="30vh"
        append-to-body
      )
        .wrap.flex.flex-column.center-center
          Icon.dialog-icon(icon="bi:x-circle")
          label 輸入的密碼不正確
          el-button.button-secondary.mt-1(ref="errorBtnConfirm" @click="handleCloseError") 確定

      .wrap.flex.flex-column.center-center
        label.align-self-start(:style="{fontSize: '1rem'}") 請輸入管理員密碼
        el-input.input-primary.mt-1(ref="inputRef" type="password" v-model="password" @keyup.enter.native.stop="handleLogin")
        el-button.button-primary.mt-1(@click="handleLogin") 登入
      
</template>

<script>
import Layout from "@/components/Layout.vue";
import { Icon } from "@iconify/vue2";

export default {
  name: "Camera",
  components: {
    Layout,
    Icon
  },
  data() {
    return {
      isQueryDialogOpen: false,
      isLoginDialogOpen: false,
      isErrorDialogOpen: false,
      isCameraDialogOpen: false,
      queryOn: false,
      password: '',
      value: '',
      options: [
        { label: '近一週', value: '1' },
        { label: '近一個月', value: '2' },
        { label: '近60天', value: '3' },
        { label: '近90天', value: '4' },
      ],
      cardItems: [
        { label: '倉存管理', icon: '' },
        { label: '監視系統', icon: '' },
        { label: '財務報表', icon: '' },
        { label: '藥品採購', icon: '' },
        { label: '出勤查詢', icon: '' },
        { label: '人事管理', icon: '' },
      ],
      tableData: [
        { date: "2024/09/16" },
        { date: "2024/09/17" },
        { date: "2024/09/18" },
        { date: "2024/09/19" },
        { date: "2024/09/20" },
        { date: "2024/09/21" },
        { date: "2024/09/22" },
        { date: "2024/09/23" },
        { date: "2024/09/24" },
        { date: "2024/09/25" },
        { date: "2024/09/26" },
      ],
      youtubeUrl: 'https://youtu.be/fcoq60SjBIs?feature=shared'
    };
  },
  mounted() {
    this.isQueryDialogOpen = true
  },
  methods: {
    disableVisible() {
      this.$refs.querySelect.visible = false
    },
    handleQuery() {
      this.queryOn = true
      this.isQueryDialogOpen = false
    },
    handleClose() {
      this.isLoginDialogOpen = false
    },
    handleCamera() {
      this.isLoginDialogOpen = true
    },
    handleLogin() {
      if (this.password === 'zxc000') return this.isCameraDialogOpen = true
      this.password = ''
      this.isErrorDialogOpen = !this.isErrorDialogOpen
    },
    handleCloseError() {
      this.isErrorDialogOpen = false
      this.$refs.inputRef.focus()
    },
     handleCloseCameraDialog() {
      this.isCameraDialogOpen = false
    }
  },
};
</script>

<style lang="scss" scoped>
.Camera {
  position: relative;
  height: 100%;
  .menu {
    position: absolute;
    bottom: 100%;
    .menu-item {
      color: #fff;
      background: rgba(#ce9e98, .8);
      padding: .5rem 1.75rem;
      border-radius: .5rem .5rem 0 0;
      border: none;
      cursor: pointer;
      &.active {
        background: #cc6a68;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.08);
      }
    }
  }
  .t-header {
    color: #fff;
    background: #474747;
    .cell {
      &.date {
        width: 180px;
      }
      &.camera {
        flex: 1;
      }
      &.input {
        padding: .5rem 1rem;
      }
    }
  }
  .cell {
    text-align: center;
    padding: 1rem;
  }
  .row {
    &:nth-child(odd) {
      background: #ece9e9;
    }
    .cell {
      flex: 1;
    }
    .link {
      color: #83a0d9;
      text-decoration: underline;
      cursor: pointer;
    }
    &:hover {
      background: rgba(#ce9e98, .5);
    }
  }
  .page {
    padding: 2rem;
  }
}
</style>

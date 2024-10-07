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
        .t-body.flex.flex-column
          template(v-for="(row, i) in tableData")
            .row.flex
              .cell
                span {{ row.date }}
              template(v-for="(item, i) in 8")
                .cell
                  .link {{ `Camera${i+1}` }}
      .page.flex.center-center.bg-white
        el-pagination(layout="prev, pager, next" :total="50")
    
</template>

<script>
import Layout from "@/components/Layout.vue";

export default {
  name: "Camera",
  components: {
    Layout,
  },
  data() {
    return {
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
    };
  },
  methods: {},
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

<template lang="pug">
  Layout
    .Progress.bg-white
      .menu.flex
        template(v-for="(item, i) in cardItems")
          .menu-item(:key="i" :class="i === 1 && 'active'") {{ item.label }}
      .table
        .t-header.grid
          template(v-for="item in headers")
            .cell {{ item.label }}

        .t-body.flex.flex-column
          template(v-for="(row, i) in tableData")
            .row.grid(:key="i" :class="row.disabled && 'disabled'")
              template(v-for="item in headers")
                .cell(v-if="item.key === 'order'") {{ i | formatOrder }}
                .cell(v-else) {{ row[item.key] }}

      .page.flex.center-center.bg-white
        el-pagination(layout="prev, pager, next" :total="50")
    
</template>

<script>
import Layout from "@/components/Layout.vue";

export default {
  name: "Progress",
  components: {
    Layout,
  },
  filters: {
    formatOrder(val) {
      return String(val).padStart(3, '0');
    },
  },
  data() {
    return {
      cardItems: [
        { label: '預約名單', icon: '' },
        { label: '本日門診', icon: '' },
        { label: '手術排程', icon: '' },
      ],
      headers: [
        { key: 'order', label: '看診號碼' },
        { key: 'status', label: '狀態' },
        { key: 'time', label: '預約/報到時間' },
        { key: 'id', label: '病例號碼' },
        { key: 'name', label: '姓名' },
        { key: 'room', label: '指定診' },
        { key: 'need', label: '諮詢需求' },
      ],
      tableData: [
        { status: '預約報到', time: '08:30', id: '245206483', name: '陳至華', need: '水光音波', room: '一診', disabled: true },
        { status: '預約報到', time: '08:30', id: '246033982', name: '李安可', need: '皮秒雷射', room: '二診', disabled: true },
        { status: '已過號', time: '09:00', id: '220394502', name: '王心儀', need: '臀部抽脂', room: '一診', disabled: true },
        { status: '預約報到', time: '09:00', id: '212356480', name: '廖芸潔', need: '熊貓針', room: '二診', disabled: true },
        { status: '已過號', time: '09:30', id: '220563881', name: '王宜靜', need: '美式電波', room: '一診', disabled: true },
        { status: '預約報到', time: '10:00', id: '267748026', name: '許一庭', need: '眼袋抽取術', room: '一診', disabled: false },
        { status: '預約報到', time: '10:00', id: '220224563', name: '林筱鈺', need: '水光音波', room: '三診', disabled: false },
        { status: '預約報到', time: '10:20', id: '256021680', name: '張安晴', need: '皮秒雷射', room: '二診', disabled: false },
        { status: '預約報到', time: '10:30', id: '263045872', name: '羅文琪', need: '果酸換膚', room: '一診', disabled: false },
        { status: '預約報到', time: '11:00', id: '203854331', name: '許漢宗', need: '面部削骨', room: '二診', disabled: false },
        { status: '預約報到', time: '11:00', id: '223044922', name: '梁書燁', need: '音波拉皮', room: '三診', disabled: false },
        { status: '預約報到', time: '11:30', id: '242564038', name: '葉小琳', need: '胸部隆乳', room: '一診', disabled: false },
        { status: '預約報到', time: '11:30', id: '213040868', name: '李知寧', need: '水光音波', room: '二診', disabled: false },
        { status: '預約報到', time: '11:30', id: '202855765', name: '黃庭昱', need: '眼袋抽取術', room: '三診', disabled: false },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.Progress {
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
    grid-template-columns: 120px 1fr 1fr 1fr 1fr 1fr 1fr;
  }
  .cell {
    text-align: center;
    padding: 1rem;
  }
  .row {
    grid-template-columns: 120px 1fr 1fr 1fr 1fr 1fr 1fr;
    &:nth-child(odd) {
      background: #ece9e9;
    }
    .cell {
      flex: 1;
    }
    &.disabled {
      opacity: .5;
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

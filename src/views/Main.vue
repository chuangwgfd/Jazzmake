<template lang="pug">
  Layout
    .main.bg-primary
      .grid.grid-cols-3
        .card.card-shadow.bg-white.flex.flex-column.center-center(v-for="(item, i) in cardItems" :key="i" @click="handleClick")
          img(:src="item.img")
    
</template>

<script>
import Layout from "@/components/Layout.vue";
import img01 from '../assets/images/權限管理1.png'
import img02 from '../assets/images/權限管理2.png'
import img03 from '../assets/images/權限管理3.png'
import img04 from '../assets/images/權限管理4.png'
import img05 from '../assets/images/權限管理5.png'
import img06 from '../assets/images/權限管理6.png'

export default {
  name: "Main",
  components: {
    Layout,
  },
  data() {
    return {
      cardItems: [
        { label: "倉存管理", img: img01 },
        { label: "監視系統", img: img02 },
        { label: "財務報表", img: img03 },
        { label: "藥品採購", img: img04 },
        { label: "出勤查詢", img: img05 },
        { label: "人事管理", img: img06 },
      ],
    };
  },
  methods: {
    handleClick() {
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
    img {
      width: 110px;
    }
  }
}
</style>

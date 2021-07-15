<template>
  <div class="blog_detail">
    <div class="container">
      <div class="wrap" v-for="item in detail_item" :key="item.title">
        <h2>Detail title</h2>
        <h3>{{ item.title }}</h3>
        <p>{{ item.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "blog_detail",
  data() {
    return {
      title: "",
      item: {},
      detail_item: [],
    };
  },
  created() {
    this.title = this.$route.params.title;
  },
  mounted() {
    axios.get("data/detail.json").then((resp) => {
      this.item = resp.data;
      // console.log(this.item);
      let new_title = this.item.find((el) => el.title === this.title);
      this.detail_item.push(new_title);
    });
  },
};
</script>



<style  lang="scss">
@import "../../assets/css/common/blog_detail.scss";
@import "../../assets/css/style.scss";
</style>

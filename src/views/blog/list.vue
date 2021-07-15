<template>
  <section class="blogs">
    <div class="container">
      <div class="note">blog</div>
      <h2 class="title">We Publish Blogs Every Week</h2>
      <h3>
        We understand how desperatly you want to grow in the business world &
        our motto is to help you with practicale idea and plan
      </h3>

      <splide :options="options" :slides="list_items">
        <splide-slide v-for="item in list_items" :key="item.title">
          <div class="card">
            <div class="pic">
              <!-- <img :src="require(`@/assets/img/${item.pic}`)" :alt="item.title" /> -->
              <img
                :data-splide-lazy="require(`@/assets/img/${item.pic}`)"
                :alt="item.title"
              />
            </div>
            <h3 class="h3_title">{{ item.title }}</h3>
            <p class="text_content">
              {{ item.text }}
            </p>
            <router-link :to="'/blog/' + item.title" class="btn button_blogs"
              >Learn More
              <!-- <br />
              <div class="btn button_blogs">
                <a href="#">Learn More</a>
              </div>
              <br /> -->
            </router-link>
          </div>
        </splide-slide>
      </splide>
    </div>
  </section>
</template>

<script>
import axios from "axios";

import Vue from "vue";
import VueSplide from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
Vue.use(VueSplide);
export default {
  name: "blog_list",
  components: {},
  data() {
    return {
      list_items: [],
      options: {
        rewind: true,
        perPage: 2,
        gap: "60px",
        padding: {
          left: "60px",
          right: "60px",
        },
        lazyLoad: true,
        preloadPages: 1, //?
        breakpoints: {
          700: {
            perPage: 1,
            padding: {
              left: "10px",
              right: "10px",
            },
          },
        },
      },
    };
  },
  created() {
    axios.get("data/blog.json").then((resp) => {
      this.list_items = resp.data;
      // console.log(resp.data);
    });
  },
};
</script>


<style  lang="scss">
@import "../../assets/css/common/blog.scss";
@import "../../assets/css/style.scss";
</style>
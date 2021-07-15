<template>
  <header id="header" :class="{ fixed: hasFixed }">
    <div class="container flex">
      <div class="logo">
        <img src="../assets/img/Logo.png" alt="#" />
      </div>
      <nav class="header_menu main_menu">
        <ul>
          <li>
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li>
            <router-link class="nav-link" to="/services">Services</router-link>
          </li>
          <li>
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li>
            <router-link class="nav-link" to="/blog_1">Blog</router-link>
          </li>
        </ul>
      </nav>
      <button
        class="hamburger hamburger--elastic"
        @click="toggleMenu"
        :class="isMenu ? 'is_active' : ''"
        type="button"
      >
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
    </div>
  </header>
</template>


<script>
import store from "@/store";
export default {
  name: "siteHeader",
  data() {
    return {
      hasFixed: false,
      isMenu: store.getters.menu,
    };
  },
  watch: {
    "$store.state.mobileMenu": function () {
      this.isMenu = store.state.mobileMenu;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.scroll_header);
  },
  methods: {
    scroll_header() {
      if (window.scrollY > 100) {
        this.hasFixed = true;
      } else {
        this.hasFixed = false;
      }
    },

    toggleMenu() {
      this.isMenu = true;
      store.commit("toggleMenu", true);
      document.body.classList.toggle("open");
    },
  },
};
</script>


<style  lang="scss">
@import "../assets/css/common/header";
@import "../assets/css/hamburger.scss";
</style>



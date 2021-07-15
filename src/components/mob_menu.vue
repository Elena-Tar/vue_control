<template>
  <div>
    <div class="mobile_menu_block" v-if="isMenu">
      <div class="mmb_top">
        <div class="mm_logo">
          <div class="logo">
            <img src="../assets/img/Logo.png" alt="#" />
          </div>
        </div>
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
      <nav class="mobile_menu">
        <ul>
          <ul>
            <li @click="go()">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li @click="go()">
              <router-link class="nav-link" to="/services"
                >Services</router-link
              >
            </li>
            <li @click="go()">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
            <li @click="go()">
              <router-link class="nav-link" to="/blog_1">Blog</router-link>
            </li>
          </ul>
        </ul>
      </nav>
    </div>
    <div class="menu_shadow"></div>
  </div>
</template>

<style  lang="scss">
@import "../assets/css/common/mob_menu.scss";
@import "../assets/css/hamburger.scss";
</style>

<script>
import store from "@/store";
export default {
  name: "siteMobileMenu",
  data() {
    return {
      hasActive: false,
      // isMenu: store.getters.menu(),
      isMenu: store.getters.menu,
    };
  },
  watch: {
    "$store.state.mobileMenu": function () {
      // console.log(this.store.toggleMenu);
      // this.isMenu = this.$store.state.mobileMenu;
      this.isMenu = store.state.mobileMenu;
    },
  },
  methods: {
    toggleMenu() {
      this.isMenu = false;
      store.commit("toggleMenu", false);
      document.body.classList.toggle("open");
    },
    go() {
      this.hasActive = false;
      document.body.classList.remove("open");
      store.commit("toggleMenu", false);
    },
  },
};
</script>
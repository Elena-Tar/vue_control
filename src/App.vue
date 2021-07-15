<template>
  <div id="app">
    <siteMobileMenu />
    <siteHeader />
    <router-view />
    <siteFooter />
  </div>
</template>

<style lang="scss">
@import "assets/css/style.scss";
@import "assets/fonts/style_fonts.scss";
</style>


<script>
import siteHeader from "@/components/header.vue";
import siteFooter from "@/components/footer.vue";
import siteMobileMenu from "@/components/mob_menu.vue";
export default {
  components: {
    siteHeader,
    siteFooter,
    siteMobileMenu,
  },
};
</script>
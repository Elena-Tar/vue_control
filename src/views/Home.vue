<template>
  <div class="home">
    <main>
      <siteHero />
      <siteBrands />
    </main>
  </div>
</template>



<script>
import siteBrands from "@/components/brands.vue";
import siteHero from "@/components/hero.vue";
export default {
  components: {
    siteBrands,
    siteHero,
  },
};
</script>

<template>
  <section class="portfolio" id="portfolio">
    <div class="container">
      <div class="flex">
        <div class="work">
          <div class="note">achievements</div>
          <h2 class="title">
            We Worked With <span> 100+ </span>Company Over <span>10</span> Years
          </h2>
          <div class="pic">
            <img src="../assets/img/Group 203.png" alt="#" />
          </div>
          <h4 class="h4_portfolio">JobHub Job Finding Website</h4>
          <p class="p_portfolio">
            This website has become one of the best ux interface for users with
            an beautiful ui and also lucrative fot upcoming startups in the
            sectors
          </p>
          <router-link class="btn button_portfolio" to="/portfolioMore"
            >View More Work</router-link
          >
        </div>
        <div class="cent">
          <ul>
            <li>
              <div class="counter">
                <VueJsCounter start="0" end="9"></VueJsCounter>
              </div>
              <div class="text">Completed Full Projects</div>
              <div class="from">From 789+ Companies</div>
            </li>
            <li>
              <div class="counter">
                <VueJsCounter start="0" end="924"></VueJsCounter>
              </div>
              <div class="text">Satisfiingly Happy Clients</div>
              <div class="from">From 100+ Countries</div>
            </li>
            <li>
              <div class="counter">
                <VueJsCounter start="0" end="416"></VueJsCounter>
              </div>
              <div class="text">Expertised Unit Employees</div>
              <div class="from">From 20+ Countries</div>
            </li>
            <li>
              <div class="counter">
                <VueJsCounter start="0" end="3024"></VueJsCounter>
              </div>
              <div class="text">Startups Case Studies</div>
              <div class="from">From 100+ Countries</div>
            </li>
          </ul>
          <div class="pic">
            <img src="../assets/img/Group 204.png" alt="#" />
          </div>
          <h4 class="h4_portfolio">CENT - Payment App Landing Website</h4>
          <p class="p_portfolio">
            This website has become one of the best ux interface for users with
            an beautiful ui and also lucrative fot upcoming startups in the
            sectors
          </p>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import VueJsCounter from "vue-js-counter";
export default {
  name: "sitePortfolio",
  components: {
    VueJsCounter,
  },
};
</script>

<style  lang="scss">
@import "../assets/css/common/portfolio.scss";
// @import "../assets/css/style.scss";
</style>
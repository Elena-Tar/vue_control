<template>
  <footer>
    <div class="top">
      <div class="container">
        <h2 class="title">Subscribe To Our Newsletter Get The Best Offers</h2>
        <form
          @submit="validateAndSend"
          action="#"
          method="POST"
          id="subscribe_form"
          class="form_subscribe"
        >
          <input
            type="text"
            id="email"
            name="email"
            class="form-control"
            :class="{ has_err: hasErr }"
            placeholder="Your Email"
            v-model="email"
            @focus="reset()"
          />
          <div v-if="errors.length > 0">
            <div
              id="email_err"
              class="form_text_err"
              v-for="error in errors"
              :key="error"
            >
              {{ error }}
            </div>
          </div>
          <button class="btn btn_footer" type="submit" id="send_btn">
            <span class="check_mark"> &#10003;</span>
            <span class="btn_text">Subscribe </span>
          </button>
        </form>
      </div>
    </div>

    <div class="main">
      <div class="container flex">
        <div class="footer_logo">
          <div class="logo">
            <img src="../assets/img/Logo.png" alt="#" />
          </div>
          <p>business consultancy agency</p>
        </div>

        <nav>
          <ul class="footer_menu">
            <li><router-link class="nav-link" to="/">Home</router-link></li>
            <li>
              <router-link class="nav-link" to="/services"
                >Services</router-link
              >
            </li>
            <li>
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
            <li>
              <router-link class="nav-link" to="/blog_1">Blog</router-link>
            </li>
          </ul>
        </nav>
        <ul
          class="contacts"
          itemscope
          itemtype="https://schema.org/Organization"
        >
          <li class="tel" itemprop="telephone">
            <a href="tel:+9981276234">+998 1276 234</a>
          </li>
          <li
            class="address"
            itemprop="address"
            itemscope
            itemtype="https://schema.org/PostalAddress"
          >
            <a href="#">82/93 Boeind Street. NY</a>
          </li>
          <li class="email">
            <a href="mailto:info@amid.mail.com">info@amid.mail.com</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="bottom">
      <div class="container flex">
        <div class="text">All Rights Reserved @Debzui2020</div>
        <div class="social_network">
          <ul>
            <li>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="nofollow"
                title="Twitter"
                ><span class="icon-twitter"></span
              ></a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="nofollow"
                title="Facebook"
                ><span class="icon-facebook1"></span
              ></a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="nofollow"
                title="Instagram"
                ><span class="icon-instagram"></span
              ></a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="nofollow"
                title="LinkedIn"
                ><span class="icon-linkedin2"></span
              ></a>
            </li>
            <li>
              <a
                href="https://www.skype.com/"
                target="_blank"
                rel="nofollow"
                title="Skype"
                ><span class="icon-skype"></span
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import axios from "axios";

export default {
  name: "siteFooter",
  data() {
    return {
      email: "",
      errors: [],
      hasErr: false,
      BOT_TOKEN: "1812836695:AAH79Qc2DHvUC8sWlVFylnBVznw4r7gCM7A",
      CHAT_ID: "-1001285100881",
    };
  },
  methods: {
    validateAndSend(e) {
      e.preventDefault();
      let valid = true;
      if (this.email === "") {
        valid = false;
        if (this.errors.length === 0) {
          this.errors.push("Email is required.");
          this.hasErr = true;
        }
      } else {
        if (!this.isValidEmail(this.email)) {
          valid = false;
          if (this.errors.length === 0) {
            this.errors.push("Enter correct email.");
            this.hasErr = true;
          }
        }
      }
      if (valid) {
        let text = this.email + " You have successfully subscribed!";
        // console.log(text);
        axios
          .get(
            "https://api.telegram.org/bot" +
              this.BOT_TOKEN +
              "/sendMessage?chat_id=" +
              this.CHAT_ID +
              "&text=" +
              text
          )
          .then((resp) => {
            console.log(resp.status);
            if (resp.status === 200) {
              this.$toast.open("You have successfully subscribed!");
              this.email = "";
            } else {
              alert("ne ok");
            }
          });
      }
    },
    isValidEmail(email) {
      //eslint-disable-next-line
      return /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
        email
      );
    },
    reset() {
      this.errors = [];
      this.hasErr = false;
    },
  },
};
</script>

<style lang="scss">
@import "../assets/css/common/footer.scss";
@import url("../assets/css/icon_style.css");
</style>


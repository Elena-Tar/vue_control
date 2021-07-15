<template>
  <section class="hero">
    <div class="container wrap">
      <div class="wrap_content">
        <div class="note">It works!</div>
        <h2>Try Our Business Ideas to grow Rapidly</h2>
        <p class="text_content">
          We understand how desperatly you want to grow in the business world &
          our motto is to help you with practicale idea and plan
        </p>
        <div class="buttons_hero">
          <button class="btn btn_hero" type="button" @click="clickForm()">
            Get Started
          </button>
          <div class="video" @click="clickVideo()">
            <div class="icon_video">
              <div class="wrap_img">
                <img src="../assets/img/hero Polygon 1.png" alt="#" />
              </div>
            </div>
            <div class="text_video">DEMO VIDEO</div>
          </div>
        </div>
        <ul class="wrap_block">
          <li class="wrap1">
            <div class="icon icon_1">
              <div class="pic_icon">
                <svg
                  width="23"
                  height="22"
                  viewBox="0 0 23 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.2984 5.32266H16.9984V3.11214C16.9984 1.89303 16.0117 0.901611 14.7984 0.901611H8.19838C6.98508 0.901611 5.99838 1.89303 5.99838 3.11214V5.32266H2.69838C1.48508 5.32266 0.498383 6.31408 0.498383 7.53319V10.849H22.4984V7.53319C22.4984 6.31408 21.5117 5.32266 20.2984 5.32266ZM8.19838 3.11214H14.7984V5.32266H8.19838V3.11214ZM13.6984 14.1648H9.29838V11.9542H0.498383V19.6911C0.498383 20.9102 1.48508 21.9016 2.69838 21.9016H20.2984C21.5117 21.9016 22.4984 20.9102 22.4984 19.6911V11.9542H13.6984V14.1648Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </li>
          <li class="wrap2">
            <div class="icon icon_2">
              <div class="pic_icon">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.2222 25C23.7542 25 25 23.7542 25 22.2222V2.77778C25 1.24583 23.7542 0 22.2222 0H2.77778C1.24583 0 0 1.24583 0 2.77778V22.2222C0 23.7542 1.24583 25 2.77778 25H22.2222ZM9.10139 9.24722L14.6569 12.025L16.8139 7.7125L19.2986 8.95555L15.9 15.7542L10.3444 12.9764L8.1875 17.2889L5.70278 16.0458L9.10139 9.24722Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </li>
          <li class="wrap3">
            <div class="icon icon_3">
              <div class="pic_icon">
                <svg
                  width="16"
                  height="20"
                  viewBox="0 0 16 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 4C16 1.832 12.337 0 8 0C3.663 0 0 1.832 0 4V6C0 8.168 3.663 10 8 10C12.337 10 16 8.168 16 6V4ZM8 17C3.663 17 0 15.168 0 13V16C0 18.168 3.663 20 8 20C12.337 20 16 18.168 16 16V13C16 15.168 12.337 17 8 17Z"
                    fill="white"
                  />
                  <path
                    d="M16 8C16 10.168 12.337 12 8 12C3.663 12 0 10.168 0 8V11C0 13.168 3.663 15 8 15C12.337 15 16 13.168 16 11V8Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </li>
          <li class="wrap4">
            <div class="icon icon_4">
              <div class="pic_icon">
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.08385 22.7238H1.61017C0.969849 22.7238 0.452271 22.205 0.452271 21.5659L0.452271 12.3027C0.452271 11.6635 0.969849 11.1448 1.61017 11.1448H5.08385C5.72416 11.1448 6.24174 11.6635 6.24174 12.3027V21.5659C6.24174 22.205 5.72416 22.7238 5.08385 22.7238ZM13.1891 22.7238H9.71543C9.07511 22.7238 8.55753 22.205 8.55753 21.5659L8.55753 1.88165C8.55753 1.24249 9.07511 0.723755 9.71543 0.723755L13.1891 0.723755C13.8294 0.723755 14.347 1.24249 14.347 1.88165L14.347 21.5659C14.347 22.205 13.8294 22.7238 13.1891 22.7238ZM21.2944 22.7238H17.8207C17.1804 22.7238 16.6628 22.205 16.6628 21.5659V8.82902C16.6628 8.18986 17.1804 7.67112 17.8207 7.67112H21.2944C21.9347 7.67112 22.4523 8.18986 22.4523 8.82902V21.5659C22.4523 22.205 21.9347 22.7238 21.2944 22.7238Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <modal
      v-if="showModal"
      @close="resetAndClose"
      :class="showModal ? 'opened' : ''"
    >
      <div slot="header">
        <div class="modal_header_wrap">
          <h3>Request a call back</h3>
        </div>
      </div>
      <div slot="body">
        <div class="modal_main">
          <form
            id="call_back_form"
            @submit="callBackForm"
            action="#"
            method="POST"
            class="cls_callBackform"
          >
            <div class="modal_window_content">
              <div class="input_form">
                <input
                  type="text"
                  id="email"
                  name="email"
                  class="form-control"
                  :class="{ has_err: has_err_email }"
                  placeholder="Your Email"
                  v-model="email"
                  @focus="reset()"
                />
                <div v-if="errors_email.length > 0">
                  <div
                    id="email_err"
                    class="form_text_err"
                    v-for="error in errors_email"
                    :key="error"
                  >
                    {{ error }}
                  </div>
                </div>
              </div>
              <div class="input_form">
                <input
                  v-mask="'+38 (###) ###-##-##'"
                  type="tel"
                  id="phone"
                  name="phone"
                  class="form-control_tel"
                  :class="{ has_err: has_err_phone }"
                  placeholder="Your phone number"
                  v-model="phone"
                  @focus="reset()"
                />
                <div
                  v-if="errors_phone.length > 0"
                  style="border: 1p solid red"
                >
                  <div
                    id="phone_err"
                    class="form_text_err"
                    v-for="error in errors_phone"
                    :key="error"
                  >
                    {{ error }}
                  </div>
                </div>
              </div>
              <div class="input_form">
                <textarea
                  type="text"
                  id="msg"
                  name="msg"
                  class="textarea form-control"
                  :class="{ has_err: has_err_msg }"
                  placeholder="When to contact you?"
                  v-model="msg"
                  @focus="reset()"
                ></textarea>
                <div v-if="errors_msg.length > 0">
                  <div
                    id="msg_err"
                    class="form_text_err"
                    v-for="error in errors_msg"
                    :key="error"
                  >
                    {{ error }}
                  </div>
                </div>
              </div>
            </div>
            <button class="btn btn_request" type="submit" id="call_back_btn">
              Request a call
            </button>
          </form>
        </div>
      </div>
      <!-- <div slot="footer">
        <div class="btn btn_send_contacts" title="Request a call">
          <a href="javascript:void(0)" onclick="">Request a call</a>
        </div>
      </div> -->
      <div slot="footer"></div>
    </modal>

    <modal
      v-if="showModal_2"
      @close="showModal_2 = false"
      :class="showModal_2 ? 'opened' : ''"
    >
      <div slot="header">
        <div class="modal_header_wrap">
          <h3>Our business ideas</h3>
        </div>
      </div>
      <div slot="body">
        <div class="videos_list" v-html="video"></div>
      </div>
      <div slot="footer">
        <div class="wrap_footer">
          <button @click="showModal_2 = false" class="btn btn_close">
            Сlose
          </button>
        </div>
      </div>
    </modal>
  </section>
</template>

<script>
import modal from "@/components/modal";
import axios from "axios";

export default {
  name: "siteHero",
  components: {
    modal,
  },
  data() {
    return {
      showModal: false,
      showModal_2: false,
      video: "",
      email: "",
      phone: "",
      msg: "",
      errors_phone: [],
      errors_msg: [],
      errors_email: [],
      has_err_phone: false,
      has_err_msg: false,
      has_err_email: false,
      BOT_TOKEN: "1812836695:AAH79Qc2DHvUC8sWlVFylnBVznw4r7gCM7A",
      CHAT_ID: "-1001285100881",
    };
  },
  methods: {
    clickVideo() {
      this.video = `<iframe id="my-video" width="100%" height="315" src="https://www.youtube.com/embed/MVihxZvSztk"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>`;
      this.showModal_2 = true;
    },
    clickForm() {
      this.showModal = true;
    },
    callBackForm(e) {
      e.preventDefault();
      let valid = true;
      if (this.phone === "") {
        valid = false;
        if (this.errors_phone.length === 0) {
          this.errors_phone.push("Phone is required.");
          this.has_err_phone = true;
        }
      } else {
        if (this.phone.length !== 19) {
          valid = false;
          if (this.errors_phone.length === 0) {
            this.errors_phone.push("Enter correct phone");
            this.has_err_phone = true;
          }
        }
      }
      if (this.msg === "") {
        valid = false;
        if (this.errors_msg.length === 0) {
          this.errors_msg.push("Required field.");
          this.has_err_msg = true;
        }
      }
      if (this.email === "") {
        valid = false;
        if (this.errors_email.length === 0) {
          this.errors_email.push("Email is required.");
          this.has_err_email = true;
        }
      } else {
        if (!this.isValidEmail(this.email)) {
          valid = false;
          if (this.errors_email.length === 0) {
            this.errors_email.push("Enter correct email.");
            this.has_err_email = true;
          }
        }
      }
      if (valid) {
        let text = this.email + " We will definitely contact you";
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
            // console.log(resp.status);
            if (resp.status === 200) {
              this.resetAndClose();
              this.$toast.open("We will definitely contact you!");
            } else {
              this.$toast.open({
                message: "Something went wrong!",
                type: "error",
              });
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
      this.errors_phone = [];
      this.errors_msg = [];
      this.errors_email = [];
      this.has_err_phone = false;
      this.has_err_msg = false;
      this.has_err_email = false;
    },
    resetAndClose() {
      this.reset();
      this.showModal = false;
      this.email = "";
      this.phone = "";
      this.msg = "";
    },
  },
};
</script>

<style  lang="scss">
@import "../assets/css/common/hero.scss";
@import "../assets/css/style.scss";
</style>

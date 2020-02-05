<template>
  <div :class="whichPic" class="homepage">
    <!-- FOR DESKTOP -->
    <div class="homepage__box" v-if="!Showing">
      <div class="homepage__profpic">
        <img src="~/assets/images/AfterlightImage3.jpg" alt="">
      </div>
      <div class="homepage__name">
        <h1>Faizal Ditya</h1>
        <h2>Front-end Web Developer</h2>
      </div>
      <div class="divider--vertical"></div>
      <div class="homepage__contact">
        <a href="mailto:dityafaizal99@gmail.com?Subject=We%20need%20you" target="_top">
          <Mail />
        </a>
        <!-- <Instagram /> -->
      </div>
    </div>
    <!-- FOR DESKTOP END -->

    <!-- FOR MOBILE -->
    <div class="homepage__box--phone" v-if="Showing">
      <div class="homepage__box--top">
        <div class="homepage__profpic">
          <img src="~/assets/images/AfterlightImage3.jpg" alt="">
        </div>
        <div class="homepage__name">
          <h2>Faizal Ditya</h2>
          <h3>Front-end Web Developer</h3>
        </div>
      </div>
      <div class="divider--horizontal"></div>
      <div class="homepage__contact">
        <a href="mailto:dityafaizal99@gmail.com?Subject=We%20need%20you" target="_top">
          <Mail />
        </a>
        <!-- <Instagram /> -->
      </div>
    </div>
    <!-- FOR MOBILE END -->
  </div>
</template>

<script>
import Mail from "../icons/mail.vue"
import Instagram from "../icons/instagram.vue"

export default {
  components: {
    Mail,
    Instagram
  },
  props: [
    'whichBrowser',
    'Showing'
  ],
  computed: {
    whichPic() {
      const browser = this.whichBrowser

      if (browser == "isSafari") {
        return "no-webp"
      } else {
        return "webp"
      }
    }
  }
}
</script>

<style lang="scss">
  .homepage {
    min-height: 75%;
    display: flex;
    justify-content: center;
    align-items: center;

    &__box {
      width: 40%;
      height: 100%;
      padding: 10px;
      border-radius: 3px;
      background-color: rgba(250, 250, 250, .8);
      display: flex;
      justify-content: space-between;
      align-items: center;

      @include for-size(tablet-portrait-up) {
        width: 70%;
      }

      &--phone {
        width: 90%;
        height: 100%;
        padding: 10px;
        border-radius: 3px;
        background-color: rgba(250, 250, 250, .8);
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
      }
      &--top {
        width: 100%;
        display: flex;
        justify-content: space-around;
      }
    }
    &__profpic {

      img {
        display: block;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        position: relative;
        z-index: 2;
        object-fit: cover;

        @include for-size(phone-only) {
          width: 80px;
          height: 80px;
        }
      }
    }
    &__name {
      color: #3c3c3c;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
    }
    &__contact {
      height: 100%;
      display: flex;

      svg {
        margin: 0 5px;
        cursor: pointer;
        transition: all 200ms ease;
      }
      svg:hover {
        fill: orange;
      }
    }
  }
  .webp {
    background-image: url("../../assets/images/DSCF0821.webp");
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
  }
  .no-webp {
    background-image: url("../../assets/images/DSCF0821.JPG");
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
  }
</style>

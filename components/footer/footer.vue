<template>
  <footer>
    <div class="footer__content">
      <p>
        <!-- Feel free to drop an “Hi”, -->
        Reach me through
        <a href="mailto:dityafaizal99@gmail.com?Subject=We%20need%20you" target="_top">
          Email
        </a>
        or you can see my photographs on
        <a href="https://www.instagram.com/dityafaizal/" target="_blank">
          Instagram
        </a>
      </p>
    </div>
    <span>© 2020 — Web app designed and coded by Faizal Ditya using Vue.js + Nuxt.</span>
  </footer>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  footer {
    height: 12vh;
    color: #fafafa;
    background-color: #2d3134;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    span {

      @include for-size(phone-only) {
        width: 90%;
        font-size: .6em;
        text-align: center;
        padding: 10px 0 0;
      }
      // @include for-size(tablet-portrait-up) {
      //   width: 80%;
      // }
    }
  }
  .footer {

    &__content {
      width: 65%;

      @include for-size(phone-only) {
        width: 90%;
      }
      @include for-size(tablet-portrait-up) {
        width: 80%;
      }

      p {
        text-align: center;

        a {
          color: #fafafa;
          text-decoration: underline;
          transition: all 200ms ease;
        }
        a:hover {
          color: orange;
        }
      }
    }
  }
</style>

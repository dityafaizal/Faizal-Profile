<template>
  <div class="bio">
    <div class="bio__title">
      <h2>Short Bio</h2>
    </div>
    <div class="bio__content">
      <p>
        Experienced Frontend Web Engineer with a demonstrated history of working in the computer software industry,
        I also do UI/UX design and image manipulation.
        <br> Skilled in <b>VueJS, SCSS, Webpack, Github, Photoshop, and Figma.</b>
      </p>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  .bio {
    width: auto;
    margin: 25px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    &__title {
      width: 75%;

      @include for-size(phone-only) {
        width: 90%;
      }
      @include for-size(tablet-portrait-up) {
        width: 80%;
      }
    }
    &__content {
      width: 75%;
      margin: 15px 0 0;

      @include for-size(phone-only) {
        width: 90%;
      }
      @include for-size(tablet-portrait-up) {
        width: 80%;
      }

      p {
        font-size: 1.2em;
        text-align: justify;
      }
    }
  }
</style>

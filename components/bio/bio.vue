<template>
  <div class="bio">
    <div class="bio__title">
      <h1>Short Bio</h1>
    </div>
    <div class="bio__content">
      <p>
        Experienced Frontend Web Engineer with a demonstrated history of working in the computer software industry,
        I also like to take photograph and image manipulation.
        <br> Skilled in VueJS, SASS (CSS Pre-processor), Webpack, Github, Photoshop, and Lightroom.
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
      width: 65%;

      @include for-size(phone-only) {
        width: 90%;
      }
      @include for-size(tablet-portrait-up) {
        width: 80%;
      }
    }
    &__content {
      width: 65%;
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

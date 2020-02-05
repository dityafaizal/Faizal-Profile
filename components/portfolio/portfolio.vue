<template>
  <div class="portfolio">
    <div class="portfolio__title">
      <h1>Latest Work</h1>
    </div>
    <div class="portfolio__list" v-if="whichBrowser=='isSafari'">
      <div class="portfolio__card" >
        <img src="~/assets/images/ss_live.png" />
        <div class="image">
          <img src="~/assets/images/ss_live.png" />
        </div>
        <figcaption>
          <h4>DynEd Live</h4>
          <p>B2B english online learning web app</p>
        </figcaption>
        <span class="read-more">Visit <i class="ion-android-arrow-forward"></i></span>
        <a href="https://live.dyned.com/" target="_blank"></a>
      </div>
      <div class="portfolio__card" >
        <img src="~/assets/images/ss_live2.png" />
        <div class="image">
          <img src="~/assets/images/ss_live2.png" />
        </div>
        <figcaption>
          <h4>myneo space</h4>
          <p>B2C english online learning web app</p>
        </figcaption>
        <span class="read-more">Visit <i class="ion-android-arrow-forward"></i></span>
        <a href="https://live.myneo.space/" target="_blank"></a>
      </div>
      <div class="portfolio__card" >
        <img src="~/assets/images/ss_live3.png" />
        <div class="image">
          <img src="~/assets/images/ss_live3.png" />
        </div>
        <figcaption>
          <h4>nexgen english online</h4>
          <p>A corporate website</p>
        </figcaption>
        <span class="read-more">Visit <i class="ion-android-arrow-forward"></i></span>
        <a href="https://nexgenenglishonline.co/" target="_blank"></a>
      </div>
    </div>
    <div class="portfolio__list" v-else>
      <div class="portfolio__card" >
        <img src="~/assets/images/ss_live.webp" />
        <div class="image">
          <img src="~/assets/images/ss_live.webp" />
        </div>
        <figcaption>
          <h4>DynEd Live</h4>
          <p>B2B english online learning web app</p>
        </figcaption>
        <span class="read-more">Visit <i class="ion-android-arrow-forward"></i></span>
        <a href="https://live.dyned.com/" target="_blank"></a>
      </div>
      <div class="portfolio__card" >
        <img src="~/assets/images/ss_live2.webp" />
        <div class="image">
          <img src="~/assets/images/ss_live2.webp" />
        </div>
        <figcaption>
          <h4>myneo space</h4>
          <p>B2C english online learning web app</p>
        </figcaption>
        <span class="read-more">Visit <i class="ion-android-arrow-forward"></i></span>
        <a href="https://live.myneo.space/" target="_blank"></a>
      </div>
      <div class="portfolio__card" >
        <img src="~/assets/images/ss_live3.webp" />
        <div class="image">
          <img src="~/assets/images/ss_live3.webp" />
        </div>
        <figcaption>
          <h4>nexgen english online</h4>
          <p>A corporate website</p>
        </figcaption>
        <span class="read-more">Visit <i class="ion-android-arrow-forward"></i></span>
        <a href="https://nexgenenglishonline.co/" target="_blank"></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['whichBrowser']
}
</script>

<style lang="scss">
  .portfolio {
    margin: 30px 20px;
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @include for-size(phone-only) {
      height: auto;
    }
    @include for-size(tablet-portrait-up) {
      height: auto;
    }

    &__title {
      width: 65%;
      text-align: left;

      @include for-size(phone-only) {
        width: 90%;
      }
      @include for-size(tablet-portrait-up) {
        width: 80%;
      }
    }
    &__list {
      width: 65%;
      margin: 30px 0 0;
      display: flex;
      justify-content: space-between;

      @include for-size(phone-only) {
        width: 90%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      @include for-size(tablet-portrait-up) {
        width: 80%;
      }
    }
  }
  @import url(https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css);
  .portfolio__card {
    width: 30%;
    position: relative;
    overflow: hidden;
    background: #fafafa;
    text-align: left;
    color: #ffffff;
    font-size: 16px;

    @include for-size(phone-only) {
      width: 100%;
      padding: 10px 0;
    }
  }
  .portfolio__card * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
  }
  .portfolio__card > img,
  .portfolio__card .image img {
    // transform: scale(1.05);
    max-width: 100%;
    filter: grayscale(100%);
  }
  .portfolio__card > img {
    vertical-align: top;
    position: relative;
    filter: grayscale(100%);
    opacity: 0.6;
  }
  .portfolio__card figcaption,
  .portfolio__card .image {
    -webkit-transition-delay: 0.2s;
    transition-delay: 0.2s;
  }
  .portfolio__card .image {
    position: absolute;
    top: 0;
    bottom: 25%;
    right: 0;
    left: 0;
    overflow: hidden;
    // box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1), 0px 1px 0 rgba(255, 255, 255, 0.2);
  }
  .portfolio__card .image img {
    position: absolute;
    top: 0;
  }
  .portfolio__card figcaption {
    position: absolute;
    top: 65%;
    bottom: 46px;
    left: 20px;
    right: 20px;
    // border-bottom: 2px solid #ffffff;
    padding-top: 20px;
    z-index: 1;
  }
  .portfolio__card h4,
  .portfolio__card p {
    margin: 0;
  }
  .portfolio__card h4 {
    font-weight: 700;
    margin-bottom: 5px;
    text-transform: lowercase;
  }
  .portfolio__card p {
    font-size: 0.9em;
    letter-spacing: 1px;
    font-weight: 400;
    opacity: 0;
  }
  .portfolio__card .read-more {
    display: block;
    opacity: 0;
    -webkit-transform: translateX(-20px);
    transform: translateX(-20px);
    line-height: 48px;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 0 20px;
    color: #ffffff;
    right: 0;
    bottom: 0;
    font-weight: 500;
    position: absolute;
  }
  .portfolio__card a {
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    position: absolute;
    z-index: 1;
  }
  .portfolio__card:hover .read-more,
  .portfolio__card.hover .read-more,
  .portfolio__card:hover figcaption,
  .portfolio__card.hover figcaption {
    opacity: 1;
    -webkit-transform: translateX(0px);
    transform: translateX(0px);
  }
  .portfolio__card:hover figcaption,
  .portfolio__card.hover figcaption,
  .portfolio__card:hover .image,
  .portfolio__card.hover .image {
    -webkit-transition-delay: 0s;
    transition-delay: 0s;
  }
  .portfolio__card:hover figcaption,
  .portfolio__card.hover figcaption {
    top: 15%;
  }
  .portfolio__card:hover .image,
  .portfolio__card.hover .image {
    bottom: 100%;
  }
  .portfolio__card:hover .image img {
    filter: none;
  }
  .portfolio__card:hover > img {
    filter: blur(5px);
  }
  .portfolio__card:hover p,
  .portfolio__card.hover p {
    opacity: 1;
    -webkit-transition-delay: 0.2s;
    transition-delay: 0.2s;
  }
</style>

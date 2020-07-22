<template>
  <div class="portfolio">
    <div class="portfolio__title">
      <h2>Latest Work</h2>
    </div>
    <div class="portfolio__list">
      <div class="portfolio__card" v-for="(data, i) in portfolio" :key="i">
        <img rel="prefetch" :src="require(`@/assets/images/${data.image}`)" />
        <div class="image">
          <img rel="prefetch" :src="require(`@/assets/images/${data.image}`)" />
        </div>
        <figcaption>
          <h4>{{data.title}}</h4>
          <p>{{data.caption}}</p>
        </figcaption>
        <span class="read-more">Visit <i class="ion-android-arrow-forward"></i></span>
        <a :href="data.url" target="_blank"></a>
      </div>
      <!-- <div class="portfolio__card" >
        <img rel="prefetch" src="~/assets/images/nexgenenglishonline.png" />
        <div class="image">
          <img rel="prefetch" src="~/assets/images/nexgenenglishonline.png" />
        </div>
        <figcaption>
          <h4>nexgen english online</h4>
          <p>A corporate website</p>
        </figcaption>
        <span class="read-more">Visit <i class="ion-android-arrow-forward"></i></span>
        <a href="https://nexgenenglishonline.co/" target="_blank"></a>
      </div>
      <div class="portfolio__card" >
        <img rel="prefetch" src="~/assets/images/infinite-web-desc.png" />
        <div class="image">
          <img rel="prefetch" src="~/assets/images/infinite-web-desc.png" />
        </div>
        <figcaption>
          <h4>Infinite Co-Working Place</h4>
          <p>A co-working place website design</p>
        </figcaption>
        <span class="read-more">Visit <i class="ion-android-arrow-forward"></i></span>
        <a href="#"></a>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'whichBrowser'
  ],
  data() {
    return {
      portfolio: [
        {"image": "infinite-web-desc.png", "title": "Infinite Co-Working Place", "caption": "A co-working place website design", "url": "#"},
        {"image": "nexgenenglishonline.png", "title": "nexgen english online", "caption": "A corporate website", "url": "https://nexgenenglishonline.co/"},
        {"image": "livev1b2c.png", "title": "myneo space", "caption": "B2C english online learning web app", "url": "https://live.myneo.space/"}
      ]
    }
  }
}
</script>

<style lang="scss">
  .portfolio {
    margin: 50px 20px 30px;
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
      width: 75%;
      text-align: left;

      @include for-size(phone-only) {
        width: 90%;
      }
      @include for-size(tablet-portrait-up) {
        width: 80%;
      }
    }
    &__list {
      width: 75%;
      margin: 15px 0 0;
      display: flex;
      flex-direction: column;
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
    width: 100%;
    margin: 10px 0;
    position: relative;
    overflow: hidden;
    background: #fafafa;
    text-align: left;
    color: #ffffff;
    font-size: 16px;
    border-radius: 2px;

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
    // filter: grayscale(100%);
  }
  .portfolio__card > img {
    vertical-align: top;
    position: relative;
    // filter: grayscale(100%);
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
    bottom: 0;
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
    top: 100%;
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
    top: 80%;
  }
  .portfolio__card:hover .image,
  .portfolio__card.hover .image {
    bottom: 20%;
  }
  .portfolio__card:hover .image img {
    filter: none;
  }
  .portfolio__card:hover > img {
    // filter: blur(5px);
  }
  .portfolio__card:hover p,
  .portfolio__card.hover p {
    opacity: 1;
    -webkit-transition-delay: 0.2s;
    transition-delay: 0.2s;
  }
</style>

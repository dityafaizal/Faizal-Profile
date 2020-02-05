<template>
  <div class="main">
    <!-- HOMPAGE COMPONENT -->
    <Homepage :whichBrowser="whichBrowser" :Showing="Showing" />
    <!-- HOMPAGE COMPONENT END -->

    <!-- <div class="nav">
      <ul class="nav__ul">
        <li>BIO</li>
        <li>BLOG</li>
      </ul>
    </div> -->

    <!-- SHORTBIO COMPONENT -->
    <Shortbio />
    <!-- SHORTBIO COMPONENT END -->

    <!-- PORTFOLIO COMPONENT -->
    <Portfolio :whichBrowser="whichBrowser" />
    <!-- PORTFOLIO COMPONENT END -->

    <!-- FOOTER COMPONENT -->
    <Footer />
    <!-- FOOTER COMPONENT END -->
    <!-- <ul>
      <li v-for="post in posts" :key="post.attributes.title">
        <nuxt-link :to="getPermalink(post)">
          <img :src="'/_nuxt/img/' + post.attributes.pic" alt="" width="200" height="200">
          <h2>{{ post.attributes.title }}</h2>
        </nuxt-link>
      </li>
    </ul> -->
    <!-- <img
        src="~/assets/blog/post-1.jpg"
        width="952"
        height="509" /> -->
  </div>
</template>
<script>
import Homepage from "~/components/homepage/homepage"
import Shortbio from "~/components/bio/bio"
import Portfolio from "~/components/portfolio/portfolio"
import Footer from "~/components/footer/footer"
const path = require("path");

export default {
  components: {
    Portfolio,
    Shortbio,
    Homepage,
    Footer
  },
  async asyncData() {
    const resolve = require.context("~/content/blog/", true, /\.md$/);
    const imports = resolve.keys().map(key => {
      const [, name] = key.match(/\/(.+)\.md$/);
      return resolve(key);
    });
    return {
      posts: imports
    };
  },
  data () {
    return {
      prefix: 'blog',
      whichBrowser: null,
      windowWidth:0,
			windowHeigt:0,
      Showing: false
    }
  },
  beforeMount() {
     this.getBrowser()
  },
  mounted() {
    this.$nextTick( () => {
			window.addEventListener('resize', this.getWindowWidth);
			window.addEventListener('resize', this.getWindowHeight);
			this.getWindowWidth()
			this.getWindowHeight()
		})
  },
  methods: {
    getPermalink(post) {
      if(post.attributes.hasOwnProperty('permalink')) {
        return `${this.prefix}/${post.attributes.permalink}`;
      } else {
        return  `${this.prefix}/${post.meta.resourcePath.split('\\').pop().split('/').pop().split('.')[0]}`;
        // return  `${this.prefix}/${path.basename(post.meta.resourcePath, ".md")}`;
      }
    },
    getBrowser() {
      let browserIs = null
      // Opera 8.0+
      let isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

      // Firefox 1.0+
      let isFirefox = typeof InstallTrigger !== 'undefined';

      // Safari 3.0+ "[object HTMLElementConstructor]"
      let isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

      // Internet Explorer 6-11
      let isIE = /*@cc_on!@*/false || !!document.documentMode;

      // Edge 20+
      let isEdge = !isIE && !!window.StyleMedia;

      // Chrome 1 - 71
      let isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

      // Blink engine detection
      let isBlink = (isChrome || isOpera) && !!window.CSS;

      if (isOpera){
        browserIs = 'isOpera'
      }else if (isFirefox){
        browserIs = 'isFirefox'
      }else if (isSafari){
        browserIs = 'isSafari'
      }else if (isIE){
        browserIs = 'isIE'
      }else if (isIE){
        browserIs = 'isIE'
      }else if (isChrome){
        browserIs = 'isChrome'
      }

      this.whichBrowser = browserIs
    },
    getWindowWidth(event){
			this.windowWidth = document.documentElement.clientWidth;

			if (this.windowWidth < 768){
				//this for resolution ipad to mobile
				this.Showing = true
			}else if(this.windowWidth >= 1024){
				this.Showing = false
			}
		},
		getWindowHeight(event){
			this.windowHeigt = document.documentElement.clientHeight;
    }
  }
};
</script>
<style lang="scss">
  @import "~/assets/styles/main.scss"
</style>

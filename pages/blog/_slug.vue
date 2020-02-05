<template>
  <div>
    <h1>{{ title }}</h1>
    <img :src="'/_nuxt/img/' + image " />
    <div class="container small">
      <client-only>
        <DynamicMarkdown
          :render-func="renderFunc"
          :static-render-funcs="staticRenderFuncs" />
      </client-only>
    </div>
  </div>
</template>
<script lang="js">
import DynamicMarkdown from "~/components/Markdown/DynamicMarkdown.vue"

export default {
  // async asyncData({ params }) {
  //   try {
  //     console.info(params.slug);
  //     let post = await import(`~/content/blog/${params.slug}.md`);
  //     return {
  //       title: post.attributes.title,
  //       singlePostComponent: post.vue.component
  //     };
  //   } catch (err) {
  //     console.debug(err);
  //     return false;
  //   }
  // }
  async asyncData ({params}) {
    const fileContent = await import(`~/content/blog/${params.slug}.md`)
    // let fileContent = await import(`~/content/blog/${params.slug}.md`);
    const attr = fileContent.attributes
    return {
      name: params.slug,
      title: fileContent.attributes.title,
      image: fileContent.attributes.pic,
      // trans: attr.trans,
      // year: attr.year,
      // id: attr.id,
      // cardAlt: attr.cardAlt,
      // noMainImage: attr.noMainImage,
      // description: attr.description,
      // extraComponent: attr.extraComponent,
      renderFunc: `(${fileContent.vue.render})`,
      staticRenderFuncs: `[${fileContent.vue.staticRenderFns}]`,
      fileContent: fileContent
      // image: {
      //   main: attr.image && attr.image.main,
      //   og: attr.image && attr.image.og
      // }
    }
  },
  components: {
    DynamicMarkdown
  }
};
</script>

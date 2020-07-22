const path = require("path");
var glob = require('glob');
// import fs from 'fs'
import Mode from "frontmatter-markdown-loader/mode"
import MarkdownIt from 'markdown-it'
import mip from 'markdown-it-prism'

function getPaths (lang, type) {
  return fs.readdirSync(path.resolve(__dirname, 'content'))
    .filter(filename => path.extname(filename) === '.md')
    .map(filename => `${path.parse(filename).name}`)
}

const md = new MarkdownIt({
  html: true,
  typographer: true
})
md.use(mip)

async function getDynamicPaths(urlFilepathTable) {
  return [].concat(
    ...Object.keys(urlFilepathTable).map(url => {
      var filepathGlob = urlFilepathTable[url];
      return glob
        .sync(filepathGlob, { cwd: "content" })
        .map(filepath => `${url}/${path.basename(filepath, ".md")}`);
    })
  );
}

/* https://github.com/jake-101/bael-template */
// async function getDynamicPaths(urlFilepathTable) {
//   return [].concat(
//     ...Object.keys(urlFilepathTable).map(url => {
//       var filepathGlob = urlFilepathTable[url];
//       return glob
//         .sync(filepathGlob, { cwd: "content" })
//         .map(filepath => `${url}/${path.basename(filepath, ".md")}`);
//     })
//   );
// }

export default async() => {
  return {
    /*
    ** Rendering mode
    ** Doc: https://nuxtjs.org/api/configuration-mode
    */
    mode: "universal",

    /*
    ** Headers of the page
    ** Doc: https://vue-meta.nuxtjs.org/api/#metainfo-properties
    */
    head: {
      title: "Faizal Ditya | Front-end Developer & Product Designer",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "Faizal's Blog"
        }
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      // script: [{window.__VUE_DEVTOOLS_PORT__: "8098", window.__VUE_DEVTOOLS_HOST__: "192.168.2.189"}],
      // script: [{src:"http://192.168.2.189:8098"}]
      script: [{src:"http://localhost:8098"}]
    },

    /*
    ** Nuxt.js modules
    ** Doc: https://nuxtjs.org/guide/modules
    */
    modules: [
      // Doc: https://http.nuxtjs.org
      "@nuxt/http",
      "@nuxtjs/style-resources"
    ],

    styleResources: {
        scss: [
            'assets/styles/variable.scss'
        ]
    },

    generate: {
      routes: await getDynamicPaths({
        "/blog": "blog/*.md"
      })
    },
    server: {
      port: 3000, // default: 3000
      host: '192.168.1.2', // default: localhost
    },
    /*
    ** Build configuration
    ** Doc: https://nuxtjs.org/api/configuration-build
    */
    build: {
      extend(config, ctx) {
        // add frontmatter-markdown-loader
        const rule = config.module.rules.find(r => r.test.toString() === '/\\.(png|jpe?g|gif|svg|webp)$/i')
        config.module.rules.splice(config.module.rules.indexOf(rule), 1)

        config.module.rules.push({
          test: /\.md$/,
          loader: 'frontmatter-markdown-loader',
          include: path.resolve(__dirname, 'content'),
          options: {
            mode: [Mode.VUE_RENDER_FUNCTIONS, Mode.VUE_COMPONENT, Mode.META],
            vue: {
              root: "dynamicMarkdown"
            },
            markdown(body) {
              return md.render(body)
            }
          }
        }, {
          test: /\.(gif|jpg|JPG|png|svg|webp)$/,
          loader: 'url-loader',
          query: {
            limit: 1000,
            name: 'img/[name].[ext]'
          }
        });
        // config.module.rules.push({
        //   test: /\.md$/,
        //   include: path.resolve(__dirname, "content"),
        //   loader: "frontmatter-markdown-loader",
        //   options: {
        //     mode: [Mode.VUE_COMPONENT, Mode.META]
        //   }
        // });
      }
    }
  }
};

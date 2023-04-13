const init = async () => {

  await Promise.all(templates.map(async template => {
    await axios.get(template.template_url, {
      headers: {
        "Content-Type": "	text/html"
      },
      data: {}
    })
      .then((result) => {
        template.template = {
          template: result.data,
          props: template.props,
          data: template.data,
          methods: template.methods,
        }
      })
      .catch(function (e) {
        console.error(e);
      });
  }));

  //vue route set
  const routes = [
    { path: '/about', component: getTemplate('about-main').template, props: true, },
    { path: '/work', component: getTemplate('work-main').template, props: true },
    { path: '/game', component: getTemplate('game-main').template, props: true, },
    { path: '/tool', component: getTemplate('tool-main').template, props: true, },
    { path: '/movie', component: getTemplate('movie-main').template, props: true, },
    { path: '/blog', component: getTemplate('blog-main').template, props: true, },
    { path: '/help', component: getTemplate('help-main').template, props: true, }
  ];

  new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    router: new VueRouter({
      routes: routes
    }),
    data: () => ({
      drawer: true,
      overlay: false,
      dialog: false,
      items: [
        { to: "/about", icon: "mdi-alert-circle-outline", text: "ABOUT ME" },
        { to: "/blog", icon: "mdi-book-open-outline", text: "BLOG" },
        { to: "/schedule", icon: "mdi-home-city-outline", text: "SCHEDUL" },
        { to: "/work", icon: "mdi-home-city-outline", text: "WORK" },
        { to: "/movie", icon: "mdi-video-vintage", text: "MOVIE" },
        { to: "/game", icon: "mdi-gamepad-variant-outline", text: "GAME" },
        { to: "/tool", icon: "mdi-toolbox-outline", text: "TOOL" },
        { to: "/help", icon: "mdi-help-circle-outline", text: "HELP" }
      ]
    }),
    methods: {
      goBack() {
        window.history.length > 1
          ? this.$router.go(-1)
          : this.$router.push('/')
      }
    },
    computed: {
      username() {
        // `params` が表示される
        return this.$route.params.username
      }
    },
  }).$mount('#app')
}

init();

const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register(
        'sw.js',
        {
          scope: './',
        }
      );
      if (registration.installing) {
        console.log('Service worker installing');
      } else if (registration.waiting) {
        console.log('Service worker installed');
      } else if (registration.active) {
        console.log('Service worker active');
      }
    } catch (error) {
      console.error(`Registration failed with ${error}`);
    }
  }
};

registerServiceWorker();

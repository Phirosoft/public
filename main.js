const init = async () => {

  await Promise.all(templates.map(async template => {
    await axios.get(template.template_url, {
      headers: {
        "Content-Type": "	text/html"
      },
      data: {
      }
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
      auth0: true,
    }),
    methods: {
      goBack() {
        window.history.length > 1
          ? this.$router.go(-1)
          : this.$router.push('/')
      },
    },
    computed: {
      username() {
        // `params` が表示される
        return this.$route.params.username
      }
    },
    mounted: function () {
      let authinit = async function () {

        this.auth0 = await window.auth0.createAuth0Client({
          domain: 'dev-rhtymrmca74odbrq.us.auth0.com',
          clientId: '0frm0WzWKy3WY5j56UuxYoOJ2brsI0w5',
          authorizationParams: {
            redirect_uri: window.location.origin,
          },
        });

        let login_button = document.getElementById('login');
        login_button.addEventListener('click', async () => {
          await this.auth0.loginWithRedirect();
        });

        let logout_button = document.getElementById('logout');
        logout_button.addEventListener('click', async () => {
          await this.auth0.logout();
        });
        console.log(this.auth0);
        // const redirectResult = await this.auth0.handleRedirectCallback();
        // const user = await this.auth0.getUser();
        // console.log(this.auth0);

      }
      authinit();

    }
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

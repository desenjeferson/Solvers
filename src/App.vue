<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list-item>
        <v-img src="./assets/logo.png"></v-img>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in views"
          :key="item.title"
          link
          :to="item.router"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app shrink-on-scroll src="./assets/banner.png">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Solvers</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-switch
        v-model="$vuetify.theme.dark"
        inset
        label="Theme Dark"
        persistent-hint
      ></v-switch>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab v-for="item in views" :key="item.router" :to="item.router">
            {{ item.title }}
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer dark padless>
      <v-card flat tile class="flex lighten-1 white--text text-center">
        <v-card-text>
          <v-btn
            v-for="icon in contacts"
            :key="icon.icon"
            class="mx-4 white--text"
            icon
            ><a :href="icon.link" class="text-decoration-none">
              <v-icon size="24px">
                {{ icon.icon }}
              </v-icon></a
            >
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          Projetinho top hein!
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Solvers</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    contacts: [
      { icon: "mdi-discord", link: "https://discord.gg/yA3D23r" },
      { icon: "mdi-github", link: "https://github.com/desenjeferson/Solvers" },
      //{ icon: "mdi-notion", link: "https://www.notion.so/solversteam" },
    ],
    views: [
      { title: "Home", icon: "mdi-view-dashboard", router: "home" },
      { title: "About", icon: "mdi-forum", router: "about" },
      { title: "Gallery", icon: "mdi-image", router: "gallery" },
    ],
  }),
  computed: {
    windowHeight() {
      console.log(window.innerHeight);
      return window.innerHeight;
    },
  },
};
</script>

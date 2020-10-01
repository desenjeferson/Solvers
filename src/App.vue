<template>
  <v-app>
    <v-speed-dial
      fixed
      v-model="fab"
      :top="true"
      :left="true"
      direction="bottom"
      :open-on-hover="true"
      transition="slide-y-transition"
    >
      <template v-slot:activator>
        <v-btn v-model="fab">
          <v-img
            max-width="70"
            contain
            src="./assets/logo.png"
            lazy-src="./assets/logo.png"
          >
          </v-img>
        </v-btn>
      </template>
      <v-btn
        v-for="(view, indice) of views"
        :key="indice"
        text
        :to="view.router"
      >
        {{ view.title }}
      </v-btn><v-switch
            v-model="$vuetify.theme.dark"
            inset
            label="Dark Theme"
          ></v-switch
        >
    </v-speed-dial>
    <v-main>
      <v-row absolute floating>
        <v-col>
          <v-container>
            <v-row absolute floating>
              <v-col>
                <v-window>
                  <v-window-item v-for="(view, indice) in views" :key="indice">
                    <router-view></router-view>
                  </v-window-item>
                </v-window>
              </v-col>
            </v-row>
          </v-container>
        </v-col> </v-row
    ></v-main>
    <v-footer padless>
      <v-card flat tile class="flex text-center">
        <v-card-text>
          <v-btn v-for="icon in contacts" :key="icon.icon" class="mx-4" icon
            ><a :href="icon.link" class="text-decoration-none">
              <v-icon size="24px">
                {{ icon.icon }}
              </v-icon></a
            >
          </v-btn>
        </v-card-text>
        <v-card-text class="pt-0">
          Projetinho top hein!</v-card-text>
        <v-divider></v-divider>
        <v-card-text>
          {{ new Date().getFullYear() }} — <strong>Solvers</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    fab: false,
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
};
</script>

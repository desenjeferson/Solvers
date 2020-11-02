<template>
  <v-app>
    <v-main>
      <Home></Home>
    </v-main>
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
        <v-card-text class="pt-0"> Projetinho top hein!</v-card-text>
        <v-divider></v-divider>
        <v-card-text>
          {{ new Date().getFullYear() }} — <strong>Solvers</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import Home from "./views/Home.vue";
export default {
  components: {
    Home,
  },
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

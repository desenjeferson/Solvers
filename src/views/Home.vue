<template>
  <section class="full-page">
    <MainPage />
    <v-container fluid>
      <CardProject
        v-for="(project, indice) in projects"
        :key="indice"
        :project="project"
      />
    </v-container>
  </section>
</template>

<script>
import CardProject from "../components/Card-Project.vue";
import MainPage from "../components/Main-Page.vue";

export default {
  components: {
    MainPage,
    CardProject,
  },
  data() {
    return {
      projects: [
        {
          name: "War Base",
          status: "In progress",
          description: "Uno joguinho",
          image:
            "https://i.pinimg.com/736x/af/96/76/af96763ed2bfeee4141a8515cc39e6a7.jpg",

          timeLine: {
            title: "What is this",
            times: [
              {
                message: "Um jogo de guerra",
                color: "green lighten-1",
              },
              {
                message: "Bases",
                color: "lime lighten-1",
              },
            ],
          },
          buttons: [
            {
              name: "GitHub",
              link: "https://github.com/desenjeferson/war-base",
              icon: "mdi-github",
            },
            {
              name: "More",
              link: "https://github.com/desenjeferson/war-base",
              icon: "mdi-plus",
            },
          ],
        },
      ],
    };
  },
};
</script>
<style scoped>
.full-page {
  height: 100vh;
  width: 100vw;
  margin: 0px;
}
</style>>
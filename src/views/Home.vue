<template>
  <div>
    <v-container fluid>
      <Waterfall :options="null">
        <WaterfallItem v-for="(project, indice) in projects" :key="indice">
          <CardProject :project="project" />
        </WaterfallItem>
      </Waterfall>
    </v-container>
  </div>
</template>

<script>
import CardProject from "../components/Card-Project.vue";
import { Waterfall, WaterfallItem } from "vue2-waterfall";

export default {
  components: {
    CardProject,
    Waterfall,
    WaterfallItem,
  },
  data() {
    return {
      projects: [
        {
          name: "War Base",
          status: "In progress",
          descripition: "Uno joguinho",
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
          bunttons: [
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

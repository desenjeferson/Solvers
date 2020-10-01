<template>
  <v-card elevation="7" shaped :loading="loading" style="margin: 15px">
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">{{ project.status }}</div>
        <v-list-item-title class="headline mb-1">
          {{ project.name }}
        </v-list-item-title>
        <v-list-item-subtitle>{{ project.description }}</v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-avatar tile size="80">
        <v-img
          v-if="project.image"
          :src="project.image"
          :lazy-src="project.image"
          aspect-ratio="1"
          class="grey lighten-2"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template> </v-img
      ></v-list-item-avatar>
    </v-list-item>

    <v-card-text>
      <div class="font-weight-bold ml-8 mb-2">{{ project.timeLine.title }}</div>
      <v-timeline align-top dense>
        <v-timeline-item
          v-for="time in project.timeLine.times"
          :key="time.message"
          :color="time.color"
          small
        >
          <div>
            <div>{{ time.message }}</div>
          </div>
        </v-timeline-item>
      </v-timeline>
    </v-card-text>
    <v-card-actions>
      <v-btn
        v-for="button in project.buttons"
        :key="button.name"
        :href="button.link"
      >
        <v-icon>{{ button.icon }}</v-icon
        >{{ button.name }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: ["project"],
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    this.loading = false;
  },
};
</script>
<style scoped>
</style>
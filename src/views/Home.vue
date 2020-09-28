<template>
  <div>
    <v-row>
      <v-col v-for="(project, indice) in projects" :key="indice" cols="4">
        <v-card height="200">
          {{project.name}}
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [{name: 'War Base'}]
    };
  }
}
</script>

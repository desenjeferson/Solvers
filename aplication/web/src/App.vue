<template>
  <div id="app">
    <div v-if="!isSignIn">
      <input v-model="login" @click="singIn(login)" />
      <button @click="singIn(login)">Sing in</button>
    </div>
    <div v-if="isSignIn">
      <Home :user="user" />
    </div>
  </div>
</template>

<script>
import User from "./services/user";
import Home from "./components/Home.vue";

export default {
  name: "App",
  components: {
    Home
  },
  data: () => ({
    isSignIn: false,
    login: "",
    user: []
  }),
  mounted() {
    this.singIn(1);
  },
  methods: {
    singIn(userID) {
      User.listar(userID).then(resposta => {
        if (resposta.status === 200) {
          this.isSignIn = true;
          this.user = resposta.data;
        }
      });
    }
  }
};
</script>

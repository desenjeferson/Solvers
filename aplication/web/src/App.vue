<template>
  <div id="app">
    <div v-if="!isSignIn">
      <input v-model="login" @click="singIn(login)"/>
      <button @click="singIn(login)">Sing in</button>
    </div>
    <div v-if="isSignIn">
      <div id="nav">
        <router-link to="/">Home</router-link>|
        <router-link to="/about">About</router-link>
      </div>
      {{user}}
      <router-view />
    </div>
  </div>
</template>

<script>
import User from "./services/user";
export default {
  data: () => ({
    isSignIn: false,
    login: "",
    user:[]
  }),
  mounted() {
  },
  methods: {
    singIn(userID) {
      User.listar(userID).then(resposta => {
        if (resposta.status===200){
          this.isSignIn = true;
          this.user=resposta.data;
        }
      });
    }
  }
};
</script>>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
    path: "/Home",
    name: "Home",
    component: function() {
        return import ("../views/Home.vue");
    },
}, {
    path: "/",
    name: "",
    component: function() {
        return import ("../views/Home.vue");
    },
}, {
    path: "/Gallery",
    name: "Gallery",
    component: function() {
        return import ("../views/Gallery.vue");
    },
}, {
    path: "/About",
    name: "About",
    component: function() {
        return import ("../views/About.vue");
    },
}];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
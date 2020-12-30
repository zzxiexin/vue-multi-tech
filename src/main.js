import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
Vue.component("B", {
  template: `<div>{{$attrs}}</div>`,
  created() {
    console.log(this.$attrs);
  }
});
Vue.component("A", {
  template: `<B v-bind="$attrs"></B>`
});
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

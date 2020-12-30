import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
Vue.component("custome-component", {
  model: {
    prop: "checked",
    event: "change"
  },
  props: {
    checked: Boolean
  },
  template: `
  <input
    type="checkbox"
    v-bind:checked="checked"
    v-on:change="$emit('change', $event.target.checked)"
  >
`
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

import Vue from "vue";
import App from "./App.vue";

import BootstrapVue from "bootstrap-vue";
import { BIconPencilSquare } from "bootstrap-vue";
import { BIconCheck2Square } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.component("b-icon-pencil-square", BIconPencilSquare);
Vue.component("b-icon-check2-square", BIconCheck2Square);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

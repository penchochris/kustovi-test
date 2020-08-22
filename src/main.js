import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import { firestorePlugin } from "vuefire";

import BootstrapVue from "bootstrap-vue";
import {
  BIconPencilSquare,
  BIconCheck2Square,
  BIconXSquare,
  BModal,
  BToast
} from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(firestorePlugin);

Vue.use(BootstrapVue);
Vue.component("b-icon-pencil-square", BIconPencilSquare);
Vue.component("b-icon-check2-square", BIconCheck2Square);
Vue.component("b-icon-x-square", BIconXSquare);
Vue.component("b-modal", BModal);
Vue.component("b-toast", BToast);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");

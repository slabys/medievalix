import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'


// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import './assets/scss/_custom.scss';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

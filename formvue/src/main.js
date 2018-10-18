// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App'
import router from './router'

import axios from 'axios'
import './mock/mock.js'
import './mock/index.js'
import './mock/test1.js'
import './mock/data.js'
import './mock/CHeadData.js'
import './mock/CTableData.js'
import './mock/CUserData.js'

Vue.use(ElementUI);

Vue.prototype.$http = axios;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

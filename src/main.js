// main.js
import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'ress';                     /* npm経由でインストールしたress.cssをインポート */
import '@/assets/scss/main.scss'   /* コンポーネントに取り込んでいないscssファイル */

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

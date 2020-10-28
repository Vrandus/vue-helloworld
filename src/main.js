import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
//   methods: {
//     sendToDb: function () {
//       console.log()
//     }

//   },
//   components: { App }
// }).$mount("#app")
new Vue({
  render: h => h(App),
  el: '#app',
  template: '<App/>',
  components: { App }
})
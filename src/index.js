import VueUp      from './VueUp.vue'
import { events } from './events'

const VueUpPlugin = {
  install(Vue) {
    if (this.installed) {
      return
    }

    this.installed = true

    Vue.component('vue-up', VueUp)
    Vue.prototype.$popup = (params) => {
      if (typeof params === 'string') {
        params = { message: params }
      }

      if (typeof params === 'object') {
        events.$emit('TRIGGER', params)
      }
      
      return new Promise((resolve,reject) => {
        resolve({status:true})
      })
    }
  }
}

export default VueUpPlugin

import VueUp      from './VueUp.vue'
import { events } from './events'

const delayResolve = t => new Promise(resolve => setTimeout(resolve, t));

const VueUpPlugin = {
  install(Vue) {
    if (this.installed) {
      return
    }

    this.installed = true

    Vue.component('vue-up', VueUp)

    const instance = Vue.prototype.$popup = (params) => {

      let delay = params.hasOwnProperty('delay') ? params.delay : 3.5

      if (typeof params === 'string') {
        params = { message: params }
      }

      if (typeof params === 'object') {
        events.$emit('TRIGGER', params)
      }

      //Resolve a promise with same delay as specified in params.delay
      return delayResolve(delay * 1000)
        .then(() => {

        })
    }

    return instance
  }
}

export default VueUpPlugin

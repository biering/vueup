import VueUp      from './VueUp.vue'
import { events } from './events'

const NotificationPopup = {
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
    }
  }
}

export default NotificationPopup

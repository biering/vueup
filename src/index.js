import NotificationPopup  from './NotificationPopup.vue'
import { events }         from './events'

const Popup = {
  install(Vue) {
    if (this.installed) {
      return
    }

    this.installed = true

    Vue.component('notification-popup', NotificationPopup)
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

export default Popup

<template>
  <div class="notification-popup" :class="{ '--show': show }" :style="{ backgroundColor: backgroundColor }">
    <div class="message" :style="{ color: color }">
      {{ message }}
    </div>
  </div>
</template>


<script>
  import { events } from './events'

  export default {
    name: 'notification-popup',

    data () {
      return {
        show            : false,
        backgroundColor : 'rgba(0, 0, 0, 0.8)',
        color           : '#ffffff'
      }
    },

    mounted () {
      events.$on('TRIGGER', (payload) => {
        if (!payload.hasOwnProperty('message')) {
          return
        }

        this.message = payload.message

        let delay = payload.hasOwnProperty('delay')
          ? payload.delay : 3.5

        this.color = payload.hasOwnProperty('color')
          ? payload.color : '#ffffff'

        this.backgroundColor = payload.hasOwnProperty('backgroundColor')
          ? payload.backgroundColor : 'rgba(0, 0, 0, 0.8)'

        delay *= 100

        this.show = true
        setTimeout(() => {
          this.show = false
        }, delay)
      })
    }
  }
</script>

<style lang="css" scoped>
  @import url('https://fonts.googleapis.com/css?family=Rubik:400,500,700');

  .notification-popup {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    z-index: 1000000000;
    pointer-events: none;
  }

  .notification-popup.--show {
    opacity: 1;
  }

  .notification-popup:not(.--show) {
    opacity: 0;
    transition: opacity .4s;
  }

  .notification-popup .message {
    color: #fff;
    font-family: 'Rubik', sans-serif;
    font-size: 60px;
    position: absolute;
    text-align: center;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
  }

</style>

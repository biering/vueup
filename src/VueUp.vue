<template>
  <div
    class="vue-up"
    :class="{ 'show_el': show }"
    :style="{ backgroundColor: backgroundColor }">

    <div
      class="text"
      :style="{
        color: color,
        fontSize: fontSize + 'px'
      }">
      {{ message }}
    </div>

  </div>
</template>


<script>
  import { events } from './events'

  export default {
    name: 'vue-up',

    data () {
      return {
        show            : false,
        backgroundColor : 'rgba(0, 0, 0, 0.8)',
        color           : '#ffffff',
        fontSize        : '60'
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

        this.fontSize = payload.hasOwnProperty('fontSize')
          ? payload.fontSize : '60'

        delay *= 1000

        this.show = true
        setTimeout(() => {
          this.show = false
        }, delay)
      })
    }
  }
</script>

<style lang="css" scoped>
  .vue-up {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    z-index: 1000000000;
    pointer-events: none;
  }

  .vue-up.show_el {
    opacity: 1;
  }

  .vue-up:not(.show_el) {
    opacity: 0;
    transition: opacity .4s;
  }

  .vue-up .text {
    color: #fff;
    font-family: 'Arial', sans-serif;
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

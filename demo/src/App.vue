<template>
  <main class="main">
    <header-view></header-view>

    <h1>VueUp</h1>

    <a href="https://www.npmjs.com/package/vueup">
      https://www.npmjs.com/package/vueup
    </a>

    <p>
      Simple, lightweight and super fast global notification popup for Vue.js.
    </p>

    <p>
      With VueUp you can easily notify your users about certain actions and effects.
    </p>

    <vue-up></vue-up>

    <h2>Demo</h2>

    <div class="separator"></div>

    <pre class="code-wrap">
      <code>
        this.<span class="method">$popup</span>({
          message: <span class="string">'Saved'</span>
        })

        <span class="comment">// or</span>

        this.<span class="method">$popup</span>(<span class="string">'Saved'</span>)
      </code>
    </pre>

    <button type="button" class="button" @click="trigger(1)">Default Notification</button>

    <pre class="code-wrap">
      <code>
        this.<span class="method">$popup</span>({
          message         : <span class="string">'NOTE ADDED'</span>,
          backgroundColor : <span class="string">'rgba(255, 255, 255, 0.8)'</span>,
          color           : <span class="string">'#161925'</span>
        })
      </code>
    </pre>

    <button type="button" class="button" @click="trigger(2)">Save Note</button>

    <pre class="code-wrap">
      <code>
        this.<span class="method">$popup</span>({
          message         : <span class="string">"It's done!"</span>,
          backgroundColor : <span class="string">'rgba(255, 255, 255, 0.8)'</span>,
          color           : <span class="string">'#161925'</span>
        })
      </code>
    </pre>

    <button type="button" class="button" @click="trigger(3)">It's done!</button>


    <h2>Install</h2>

    <div class="separator"></div>

    <pre class="code-wrap">
      <code>
        npm install --save vueup
      </code>
    </pre>

    Somewhere in your app:

    <pre class="code-wrap">
      <code>
        import Vue   from <span class="string">'vue'</span>
        import VueUp from <span class="string">'vueup'</span>

        Vue.use(VueUp)
      </code>
    </pre>

    <footer>
      Released under the <a href="//github.com/chryb/vueup/blob/master/LICENSE">MIT</a> license.
      <a href="//github.com/chryb/vueup">View source.</a>
    </footer>
  </main>
</template>

<script>
  import HeaderView from './Header.vue'

  export default {
    name: 'app',
    components: {
      HeaderView
    },
    methods: {
      trigger (id) {
        switch (id) {
          case 1:
            this.$popup({ 
              message: 'Saved'
            })
            break
          case 2:
            this.$popup({
              message: 'ADDED NOTE',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              color: '#161925'
            })
            break
          case 3:
            this.$popup({
              message: "It's done!",
              backgroundColor: 'rgba(225, 206, 122, 0.9)',
              color: '#ffffff'
            })
            break
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "./style.scss";
</style>

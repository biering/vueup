<template>
  <main class="main">
    <header-view></header-view>

    <h1>VueUp</h1>
    <p>Simple, lightweight and elegant global notification popup for Vue.js</p>
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

<style>
  body, html {
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  body {
    font-family: "Roboto", sans-serif;
    background-color: #fff;
    font-size: 16px;
    letter-spacing: .9px;
  }

  h1, h2 {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    color: #333;
    margin-bottom: 30px;
    margin-top: 30px;
  }

  h1 {
    font-size: 1.625em;
    letter-spacing: 6px;
    border-left: 3px solid #454545;
    padding-left: 20px;
    text-transform: uppercase;
  }

  h2 {
    font-size: 24px;
    letter-spacing: 1.9px
  }

  p {
    color: #999;
    margin-bottom: 60px;
  }

  .main {
    margin: 15vh auto 20px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    max-width: 650px;
    padding-top: 40px;
  }

  .code-wrap {
    text-align: left;
    margin-top: 30px;
    margin-bottom: 30px;
    border-radius: 5px;
    background-color: #f1f1f1;
  }

  .code-wrap code {
    font-family: "Roboto Mono", monospace;
    color: #454545;
    font-size: 14px;
  }

  code .string {
    color: #F75700;
  }

  code .method {
    color: #9c7ec2;
    font-weight: bold;
  }

  code .comment {
    color: #999;
  }

  .button {
    background: none;
    border: none;
    color: #fff;
    background-color: #ccc;
    border-radius: 3px;
    cursor: pointer;
    padding: 10px 20px;
    font-size: 18px;
    outline: none;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 60px;
  }

  .button:hover {
    background-color: #111;
  }

  .separator {
    height: 1px;
    background-color: rgba(0, 0, 0, 0.1);
    width: 100%;
  }

  footer {
    margin-top: 40px;
    line-height: 2;
  }

  a {
    color: #FA8334;
  }
</style>

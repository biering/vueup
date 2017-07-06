<template>
  <main class="main">
    <h1>VueUp</h1>
    <p>Simple and elegant global notification popup for Vue.js</p>
    <vue-up></vue-up>

    <h2>Test some notifications</h2>

    <pre class="code-wrap">
      <code>
        this.$popup({
          message: 'Saved'
        })

        // or

        this.$popup('Saved')
      </code>
    </pre>

    <button type="button" class="button" @click="trigger(1)">Default Notification</button>

    <pre class="code-wrap">
      <code>
        this.$popup({
          message: 'NOTE ADDED',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          color: '#161925'
        })
      </code>
    </pre>

    <button type="button" class="button" @click="trigger(2)">Save Note</button>

    <pre class="code-wrap">
      <code>
        this.$popup({
          message: "It's done!",
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          color: '#161925'
        })
      </code>
    </pre>

    <button type="button" class="button" @click="trigger(3)">It's done!</button>

    <footer>Released under the <a href="//github.com/deviavir/vue-bars/blob/master/LICENSE">MIT</a> license. <a href="//github.com/deviavir/vue-bars">View source.</a></footer>
  </main>
</template>

<script>
  export default {
    name: 'app',
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
    text-transform: uppercase;
    font-weight: 700;
    color: #131314;
    margin-bottom: 30px;
    margin-top: 30px;
  }

  h1 {
    font-size: 1.625em;
    letter-spacing: 6px;
    border-left: 3px solid #131314;
    padding-left: 20px;
  }

  h2 {
    font-size: 1.25em;
    letter-spacing: 4px;
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
  }

  .code-wrap {
    text-align: left;
    margin-top: 30px;
    margin-bottom: 30px;
    border-left: 5px solid #000;
    background-color: #eee;
  }

  .code-wrap code {
    font-family: "Roboto Mono", monospace;
    color: #131314
  }

  .button {
    background: none;
    border: none;
    color: #fff;
    background-color: #777;
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

  footer {
    margin-top: 40px;
    line-height: 2;
  }

  a {
    color: #42b983;
  }
</style>

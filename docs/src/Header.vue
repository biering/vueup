<template>
  <div class="header">
    <div class="wrap">
      <div class="logo">
        <a href="http://chryb.me">
          <img src="assets/logo_black.svg"/>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'header-view'
  }
</script>

<style lang="css" scoped>

  .header {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .header .wrap {
    max-width: 960px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 40px;
  }

  .header .wrap .logo {
    font-family: "Rubik", sans-serif;
    font-size: 34px;
  }

  .header .wrap .logo img {
    width: 50px;
    height: 50px;
  }

  .header .wrap .links {
    float: right;
    margin-top: -42px;
  }

  .header .wrap .links .item {

  }

  .header .wrap .links .item a {
    text-decoration: none;
    color: #999;
  }

  .header .wrap .links .item a:hover {
    color: #131314;
  }

</style>

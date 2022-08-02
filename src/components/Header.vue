<template>
  <header class="header">
    <div class="header-top">
      <div class="logo"><a href="/">Sally Handmade</a></div>
      <nav class="header-nav">
        <router-link to="/">Home</router-link>
        <router-link to="/">About</router-link>
      </nav>
    </div>
  </header>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.header {
  min-height: 100vh;
  background: url('../assets/images/header.jpg') no-repeat bottom;
  background-size: cover;
  background-attachment: fixed;
  padding: 0 15px; 

  &-top {
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding: 10px 20px;
    margin: 0 auto;
    // border-bottom-left-radius: 20px;
    // border-bottom-right-radius: 20px;
    box-shadow: inset 0 10px 18px 0 rgb(129 162 182 / 20%);
  }

  &-nav {
    display: flex;
    align-items: center;
    column-gap: 20px;

    a {
      font-size: 18px;
      color: #000;
      padding: 0 2px;
      padding-bottom: 2px;
      transition: .3s;

      &:hover,
      &.router-link-active {
        border-bottom: 2px solid #3498db;
      }
    }
  }
}
</style>
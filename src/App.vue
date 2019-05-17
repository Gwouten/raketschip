<template>
    <div class="container">
      <div class="nav">
        <app-header></app-header>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      <router-view/>
    </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  components: {
    appHeader: Header
  },
};
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Passion+One&display=swap');

  body {
    background-color: #dedede;
  }

  .container {
    background-color: #fff;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
</style>

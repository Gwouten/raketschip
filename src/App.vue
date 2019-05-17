<template>
  <div>
      
      <div class="section section--primary">
        <app-navbar></app-navbar>
      </div>

      <div class="section">
        <transition name="fade" mode="out-in">
          <router-view/>
        </transition>
      </div>

  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import '@/styles/_animations.scss';

export default {
  components: {
    appNavbar: Navbar
  },
};
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700&display=swap');

  body {
    background-color: #dedede;
  }

  .section {
    &--primary {
      background: $primary;
      background-size: 200%;
      transition: box-shadow .2s;
      &:hover {
        background-position: right;
        box-shadow: $shadow inset;

        & h1 {
          text-shadow: $text-shadow;
        }
      }
    }
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
</style>

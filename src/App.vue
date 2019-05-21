<template>
  <div>
      <transition name="slide-down" mode="out-in">
        <div class="section section--primary u-fixed-top" v-if="isNavbarVisible">
            <app-navbar></app-navbar>
        </div>
      </transition>

      <div class="page">
        <div class="section">
          <transition name="fade" mode="out-in">
            <router-view/>
          </transition>
        </div>
      </div>

  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import '@/styles/_animations.scss';
import { ticking, update, requestTick } from '@/mixins/tick'; // For debouncing

export default {
  data() {
      return {
          isNavbarVisible: false
      }
  },
  components: {
    appNavbar: Navbar
  },
  methods: {
        toggleNavbar(y) {
            y > 100 ? this.isNavbarVisible = true : this.isNavbarVisible = false;
            requestTick();
        }
    },
    mounted(){
        window.addEventListener('scroll', () => {this.toggleNavbar(window.scrollY)}, false);
    },
    destroyed(){
        window.removeEventListener('scroll', () => {this.toggleNavbar()});
    }
};
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700&display=swap');

  body {
    background-color: #dedede;
    min-height: 200vh;
  }

  .u-fixed-top {
    position: fixed;
    width: 100%;
    top: 0;
  }

  .page {
    margin-top: 72px;
  }

  .section {
    &--primary {
      background: $primary;
      background-size: 200%;
      transition: box-shadow .2s, background-position .5s;
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

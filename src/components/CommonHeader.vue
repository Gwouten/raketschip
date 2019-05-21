<template>
    <div class='common-header'>
        <h1 class="common-header__title">Raketschip</h1>
        <app-router-links></app-router-links>
    </div>
</template>

<script>
import RouterLinks from '@/components/RouterLinks.vue';

    export default {
        components: {
            appRouterLinks: RouterLinks
        }        
    }
</script>

<style lang='scss'>
.common-header {
    &__title {
        font-family: $font-header;
        text-transform: uppercase;
        text-align: center;
        font-size: $fs-lrg;
        letter-spacing: 2px;
        margin: $rh-sml 0;
    }

    .flex {
        display: flex;
        justify-content: center;
    }

    .nav__link {
        color: $black;
         &.active {
            border-bottom: 1px solid $black;
         }
    }
}

</style>
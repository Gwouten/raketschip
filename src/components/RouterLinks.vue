<template>
    <div class="flex">
        <router-link to="/"      active-class="active" class="nav__link" exact>Home</router-link>
        <router-link to="/about" active-class="active" class="nav__link">About</router-link>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang='scss'>
    .nav__link {
        color: rgba($white, .85);
        transition: color .2s;
        font-family: $font-header;
        font-weight: 400;
        text-decoration: none;
        padding: $rh-xxs 0;
        border-bottom: 1px solid transparent;
        transition: border-bottom .3s, color .2s;

        &.active {
            border-bottom: 1px solid $white;
            color: $white;
        }

        &:hover {
            color: $white;
        }

        & + .nav__link {
            margin-left: $rh-sml;
        }
    }
</style>
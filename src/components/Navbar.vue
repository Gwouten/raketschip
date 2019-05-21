<template>
        <div class="nav">
            <div class="container">
                <div class="flex flex--space-between flex--align-items-center">
                    
                    <h1>
                        <router-link to="/" class="header-link">Raketschip</router-link>
                    </h1>

                    <app-router-links></app-router-links>

                </div>
            </div>
        </div>
</template>

<script>
import RouterLinks from '@/components/RouterLinks.vue';

export default {
    components: {
        appRouterLinks: RouterLinks
    }
};
</script>

<style lang='scss' scoped>
.nav {
    padding: $rh-sml 0;
    
    h1 {
        margin: 0;
        font-family: $font-header;
        text-transform: uppercase;
        letter-spacing: 2px;
        transition: text-shadow .2s;
    }
    .header-link {
        display: inline-block;
        color: rgba($white, .85);
        transition: color .2s, transform .2s;
        text-decoration: none;
        &:hover {
            color: $white;
            transform: scale(1.02);
        }
    }

    .flex {
        display: flex;
        &--space-between {
            justify-content: space-between;
        }
        &--align-items-center {
            align-items: center;
        }
    }
}
</style>
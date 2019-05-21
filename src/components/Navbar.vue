<template>
        <div class="nav">
            <div class="container">
                <div class="flex flex--space-between flex--align-items-center">
                    
                    <h1>
                        <router-link to="/" class="header-link">Raketschip</router-link>
                    </h1>

                    <div class="flex">
                        <router-link to="/"      active-class="active" class="nav__link" exact>Home</router-link>
                        <router-link to="/about" active-class="active" class="nav__link">About</router-link>
                    </div>

                </div>
            </div>
        </div>
</template>

<script>

export default {
    
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

    &__link {
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
}
</style>
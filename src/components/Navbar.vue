<template>
    <div class="nav">
        <div class="container">
            <div class="flex">
                <h1>
                    <router-link to="/" class="header-link">Raketschip</router-link>
                </h1>
                <router-link to="/">Home</router-link>
                <router-link to="/about">About</router-link>
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
    }
}
</style>
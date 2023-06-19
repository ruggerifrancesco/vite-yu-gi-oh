<template>
    <header>
        <nav class="navbar bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">

                    <div class="logo-wrapper">
                        <img src="https://vignette1.wikia.nocookie.net/yugiohenespanol/images/a/aa/Yugioh_anime_logo.jpg/revision/latest?cb=20130310042737&path-prefix=es"
                           alt="Yu Gi Oh Logo">
                    </div>

                    <h1>Yu Gi Oh Api</h1>
                </a>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'AppHeader',
    data() {
        return {
            
        }
    },
}
</script>

<style lang="scss" scoped>
@use '../styles/partials/_mixins.scss' as *;
@use '../styles/partials/variables.scss' as *;
    .logo-wrapper {
        width: 6rem;
    }

    .navbar-brand {
        @include flex (row, flex-start, center)
    }
</style>
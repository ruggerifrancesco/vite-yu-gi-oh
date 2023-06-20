<template>
    <article class="card text-center">
        <div class="card-img-wrapper">
            <img :src="srcImage" class="card-img-top" :alt="`${name} Card.`">
            <span class="card-archetype" v-if="archetype">{{ archetype }}</span>
        </div>
        <div class="card-body">
            <h5>{{ name }}</h5>
        </div>
    </article>
</template>

<script>
export default {
    props: {
        name: String,
        srcImage: String,
        archetype: String,
    },
}
</script>

<style lang="scss" scoped>
@use '../styles/partials/_mixins.scss' as *;
@use '../styles/partials/variables.scss' as *;

    .card {
        width: calc((100% / 5) - 2rem);
        margin-left: 2rem;
        margin-bottom: 2rem;
        background-color: $primary-color;
        color: white;

        .card-img-wrapper {
            border: thick gold;
            border-style: ridge;
            position: relative;
        }

        img {
            object-fit: contain;
        }

        .card-archetype {
            position: absolute;
            left: 0;
            bottom: 0;
            width: 9rem;
            text-transform: uppercase;
            border-bottom: 20px solid $secondary-color;
            border-right: 10px solid rgba(0,0,0,0);
            height: 0;
            padding-bottom: 0.2rem;
            opacity: 0;
            font-weight: bold;
        }

        &:hover .card-archetype {
            opacity: 1;
        }

        h5 {
            text-transform: uppercase;
            color: $secondary-color;
        }
    }
</style>
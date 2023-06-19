<template>
    <article class="card text-center">
        <div class="card-img-wrapper">
            <img :src="srcImage" class="card-img-top" :alt="`${name} Card.`">
        </div>
        <div class="card-body">
            <h5>{{ name }}</h5>
            <span class="card-text">{{ archetype }}</span>
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
    .card {
        width: calc((100% / 5) - 2rem);
        margin-left: 2rem;
        margin-bottom: 2rem;

        .card-img-wrapper {
            border: thick gold;
            border-style: ridge;
        }

        img {
            object-fit: contain;
        }
    }
</style>
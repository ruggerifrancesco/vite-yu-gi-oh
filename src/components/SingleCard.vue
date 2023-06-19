<template>
    <article class="card">
        <div class="card-img-wrapper">
            <img :src="srcImage" class="card-img-top" alt="...">
        </div>
        <div class="card-body">
            <h5>{{ name }}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </article>
</template>

<script>
export default {
    props: {
        name: String,
        srcImage: String,
    },
}
</script>

<style lang="scss" scoped>
    .card {
        width: calc(100% / 5);

        .card-img-wrapper {
            border: thick gold;
            border-style: ridge;
        }
        img {
            object-fit: contain;
        }
    }
</style>
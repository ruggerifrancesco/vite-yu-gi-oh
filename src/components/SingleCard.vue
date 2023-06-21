<template>
    <article class="card text-center">

        <div class="card-wrapper">
            <div class="card-img-front">
                <img :src="srcImage" class="card-img-top" :alt="`${name} Card.`">
            </div>
            <div class="card-img-back card__face">
                <img src="https://pbs.twimg.com/media/B_1a_VKUcAIAlu8.jpg" alt="">
            </div>
        </div>

        <div class="card-body">
            <h5>{{ name }}</h5>
            <span class="card-archetype" v-if="archetype">{{ archetype }}</span>
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

        .card-body {
            position: relative;

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
                font-weight: bold;
            }
        }

        h5 {
            text-transform: uppercase;
            color: $secondary-color;
            margin-bottom: 1rem;
        }
    }

    .card-wrapper {
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 400px;
        transform-style: preserve-3d;
        transition: all 0.8s ease;

        &:hover {
            cursor: pointer;
            transform: rotateY(180deg);
        }

        .card-img-front {
            border: thick gold;
            border-style: ridge;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            overflow: hidden;
            
            img {
                object-fit: contain;
            }
        }
        .card-img-back {
            transform: rotateY( 180deg );
            border: thick gold;
            border-style: ridge;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            overflow: hidden;
            transform: rotateY(180deg);
        }
    }
    
</style>
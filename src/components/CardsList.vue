<template>
    <section class="cards-container">
        <SingleCard v-for="card in cardsArray"
            :name="card.name"
            :srcImage="card.card_images[0].image_url"
            :archetype="card.archetype"/>
    </section>
</template>

<script>
import SingleCard from './SingleCard.vue';

export default {
    name: 'CardsList',
    components: {
        SingleCard
    },
    props: {
        cardsArray: Array
    },
    data() {
        return {
            
        }
    },
}
</script>

<style lang="scss" scoped>
    .cards-container {
        display: flex;
        flex-wrap: wrap;
        background-color: white;
        padding: 3rem;
        margin-top: 5rem;
    }
</style>
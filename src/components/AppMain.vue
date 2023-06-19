<template>
    <main class="container">
        <SingleCard v-for="card in cardsList"
            :name="card.name"
            :srcImage="card.card_images[0].image_url"/>
    </main>
</template>

<script>
import axios from 'axios';
import { store } from '../store.js';
import SingleCard from './SingleCard.vue';

export default {
    name: 'AppMain',
    components: {
        SingleCard
    },
    data() {
        return {
            store,
            cardsList: [],
        }
    },
    created() {
        axios.get(store.yuGiOhApi)
        .then( (response) => {
            console.log(response.data.data);
            this.cardsList = response.data.data
        })
        .catch(function (error) {
            console.log(error);
        })
    },
}
</script>

<style lang="scss" scoped>
@use '../styles/partials/_mixins.scss' as *;
@use '../styles/partials/variables.scss' as *;

    main {
        display: flex;
        flex-wrap: wrap;
    }
</style>

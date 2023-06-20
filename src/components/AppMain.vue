<template>
    <main class="container">
        <FilterCards />
        <CardsList :cardsArray="cardsList"/>
    </main>
</template>

<script>
import axios from 'axios';
import CardsList from './CardsList.vue';
import FilterCards from './FilterCards.vue';
import { store } from '../store.js';

export default {
    name: 'AppMain',
    components: {
        FilterCards,
        CardsList,
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
        max-width: 1700px;
    }
</style>

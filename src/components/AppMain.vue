<template>
    <main class="container">
        <FilterCards :archetypesArray="archetypesList"/>
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
            archetypesList: [],
        }
    },
    methods: {
        getYuGiOhApi () {
            axios.get(store.yuGiOhApi)
            .then( (response) => {
                console.log(response.data.data);
                this.cardsList = response.data.data
            })
            .catch(function (error) {
                console.log(error);
            })
        },
        getArchetypes () {
            axios.get(store.archetypesApi)
            .then( (response) => {
                console.log(response.data);
                this.archetypesList = response.data
            })
            .catch(function (error) {
                console.log(error);
            })
        }
    },
    created() {
        this.getYuGiOhApi ()
        this.getArchetypes ()
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

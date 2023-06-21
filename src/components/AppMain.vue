<template>
    <main class="container">
        <FilterCards 
            :archetypesArray="archetypesList"
            @sortArchetype="sortArchetypeSelected"/>
        <CardsList :cardsArray="sortedCardsList"/>
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
            selectedSortOption: '',
        }
    },
    computed: {
        sortedCardsList() {
            if (this.selectedSortOption) {
                return this.cardsList.filter(card => card.archetype === this.selectedSortOption);
            } else {
                return this.cardsList;
            }
        },
    },
    methods: {
        getYuGiOhApi () {
            axios.get(store.yuGiOhApi, {
                    params: {
                        num: 100,
                        offset: 0,
                    }
                }
            )
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
        },
        sortArchetypeSelected(sortOption) {
            this.selectedSortOption = sortOption;
        },
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

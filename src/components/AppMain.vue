<template>
    <main>
        <SingleCard v-for="card in cardsList"/>
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
            console.log(response.data);
            this.cardsList = response.data
        })
        .catch(function (error) {
            console.log(error);
        })
    },
}
</script>

<style lang="scss" scoped>
    
</style>

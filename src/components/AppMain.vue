<template>
    <main>
        <SingleCard />
    </main>
</template>

<script>
import { store } from '../store.js';
import SingleCard from './SingleCard.vue';

export default {
    name: 'AppMain',
    data() {
        return {
            store,
        }
    },
    components: {
        SingleCard
    }
}
</script>

<style lang="scss" scoped>
    
</style>
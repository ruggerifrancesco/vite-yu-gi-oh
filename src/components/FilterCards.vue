<template>
    <section>
        <select v-model="selectedSortOption" @change="$emit('sortArchetype', selectedSortOption)">
            <option value="archetype-value" 
                v-for="(archetype, index) in archetypesArray.slice(0, 15)" 
                :key="index">
                {{ archetype.archetype_name }}
            </option>
        </select>
    </section>
</template>

<script>
export default {
    name: 'FilterCards',
    props: {
        archetypesArray: Array,
    },
    data() {
        return {
            selectedSortOption: ''
        }
    },
}
</script>

<style lang="scss" scoped>
    
</style>
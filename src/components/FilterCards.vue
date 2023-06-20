<template>
    <section>
        <select v-model="selectedSortOption" @change="$emit('sortArchetype', selectedSortOption)">
            <option value="">Sort By Archetype</option>
            <option :value="archetype.archetype_name" 
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
            selectedSortOption: '',
        }
    },
}
</script>

<style lang="scss" scoped>
    
</style>

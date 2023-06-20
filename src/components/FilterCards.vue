<template>
    <section>
        <select>
            <option value="default-value">Scegli un filtro!</option>
            <option value="archetype-value" v-for="(archetype, index) in archetypesArray.slice(0, 15)" :key="index">
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
            
        }
    },
}
</script>

<style lang="scss" scoped>
    
</style>
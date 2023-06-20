import { reactive } from 'vue';

export const store = reactive ({
    loading: true,
    yuGiOhApi: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0',
    archetypesApi: 'https://db.ygoprodeck.com/api/v7/archetypes.php'
})
import { reactive } from 'vue';

export const store = reactive ({
    searchText: 'ciao',
    loading: true,
    yuGiOhApi: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
})
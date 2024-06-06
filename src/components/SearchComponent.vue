<script>
import axios from 'axios';
import { store } from '../store'
export default {
  name: 'SearchComponent',
  data() {
    return {
      store
    }
  },
  methods: {
    getMovies() {
      const params = {};
      params.api_key = this.store.apiInfo.apiKey
      params.query = this.store.apiInfo.searchQuery

      axios.get(this.store.apiInfo.apiUrl, {
        params,
      }
        // params: {
        //   api_key: this.store.apiInfo.apiKey,
        //   query: this.store.apiInfo.searchQuery,
        // },
      ).then(response => console.log(response.data)).catch(error => console.log(error))
    }
  }
}
</script>
<template>
  <input type="text" v-model="this.store.apiInfo.searchQuery">
  <button @click="getMovies">Search</button>
</template>
<style></style>
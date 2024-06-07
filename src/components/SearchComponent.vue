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
    // FUNZIONE FILM
    getMovies() {
      const urlMovies = this.store.apiInfo.apiUrl + this.store.apiInfo.endpoints.movies;

      axios.get(urlMovies, {
        params: {
          api_key: this.store.apiInfo.apiKey,
          query: this.store.apiInfo.searchQuery
        },
      }
      ).then(response => {
        console.log(response.data.results),
          response.data.results.forEach(result => {
            this.store.apiInfo.movies.push(result);
          });
        console.log(this.store.apiInfo.movies)
      }).catch(error => console.log(error))
    },
    // FUNZIONE SERIE
    getSeries() {
      const urlSeries = this.store.apiInfo.apiUrl + this.store.apiInfo.endpoints.tvs;
      axios.get(urlSeries, {
        params: {
          api_key: this.store.apiInfo.apiKey,
          query: this.store.apiInfo.searchQuery
        }
      }).then(response => {
        console.log(response.data.results),
          response.data.results.forEach(result => {
            this.store.apiInfo.series.push(result);
          });
        console.log(this.store.apiInfo.series)
      }).catch(error => console.log(error))
    },
  }
}
</script>
<template>
  <input type="text" v-model="this.store.apiInfo.searchQuery">
  <button @click="getMovies(), getSeries()">Search</button>
</template>
<style></style>
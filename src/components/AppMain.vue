<script>
import { store } from '../store';
export default {
  name: 'AppMain',
  data() {
    return {
      store
    }
  },
}
</script>
<template>
  <ul>
    <!-- LISTA PER FILM -->
    <li v-for="(movie, i) in this.store.apiInfo.movies">
      <p class="mb-1">Film numero {{ i }}:</p>
      <p>{{ movie.title }}</p>
      <p>{{ movie.original_title }}</p>
      <img v-if="movie.original_language === 'it'" src="/img/italy.jpeg"></img>
      <img v-else-if="movie.original_language === 'en'" src="/img/england.jpg"></img>
      <p v-else>{{ movie.original_language }}</p>
      <p class="mb-1">{{ movie.vote_average }}</p>
    </li>
  </ul>
  <!-- LISTA PER SERIE -->
  <ul>
    <li v-for="(serie, i) in this.store.apiInfo.series">
      <p class="mb-1">Serie numero {{ i }}:</p>
      <p>{{ serie.name }}</p>
      <p>{{ serie.original_name }}</p>
      <img v-if="serie.original_language === 'it'" src="/img/italy.jpeg"></img>
      <img v-else-if="serie.original_language === 'en'" src="/img/england.jpg"></img>
      <p v-else>{{ serie.original_language }}</p>
      <p class="mb-1">{{ serie.vote_average }}</p>
    </li>
  </ul>
</template>
<style lang="scss" scoped>
.mb-1 {
  margin-bottom: 1rem;
}

img {
  width: 1rem;
}
</style>
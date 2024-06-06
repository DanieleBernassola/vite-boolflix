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
</template>
<style lang="scss" scoped>
.mb-1 {
  margin-bottom: 1rem;
}

img {
  width: 1rem;
}
</style>
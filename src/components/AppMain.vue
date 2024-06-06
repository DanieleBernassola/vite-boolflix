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
      <p>Film numero {{ i }}</p>
      <p>Titolo ita: {{ movie.title }}</p>
      <p>{{ movie.original_title }}</p>
      <p>{{ movie.original_language }}</p>
      <p class="mb-1">{{ movie.vote_average }}</p>
    </li>
  </ul>
</template>
<style lang="scss" scoped>
.mb-1 {
  margin-bottom: 1rem;
}
</style>
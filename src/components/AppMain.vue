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
      <p>{{ movie.title }}</p>
      <p>{{ movie.original_title }}</p>
      <p>{{ movie.original_language }}</p>
      <p>{{ movie.vote_average }}</p>
    </li>
  </ul>
</template>
<style></style>
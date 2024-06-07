<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { store } from '../store';
export default {
  name: 'AppMain',
  data() {
    return {
      store
    }
  },
  // FUNZIONE CHE ARROTONDA IN ECCESSO IL VOTO MEDIO
  methods: {
    roundVoteAverage: (vote) => {
      return Math.ceil(vote / 2);
    }
  }
}
</script>
<template>
  <ul>
    <!-- LISTA PER FILM -->
    <li v-for="(movie, i) in this.store.apiInfo.movies">
      <p class="mb-1">Film numero {{ i }}:</p>
      <img :src="this.store.apiInfo.imgUrl + this.store.apiInfo.endpoints.width + movie.poster_path" alt="movie">
      <p>{{ movie.title }}</p>
      <p>{{ movie.original_title }}</p>
      <img v-if="movie.original_language === 'it'" src="/img/italy.jpeg" alt="italy" class="language"></img>
      <img v-else-if="movie.original_language === 'en'" src="/img/england.jpg" alt="england" class="language"></img>
      <p v-else>{{ movie.original_language }}</p>
      <p class="mb-1">{{ roundVoteAverage(movie.vote_average) }}</p>
      <font-awesome-icon icon="fa-solid fa-star"></font-awesome-icon>
      <font-awesome-icon icon="fa-regular fa-star"></font-awesome-icon>
    </li>
  </ul>
  <!-- LISTA PER SERIE -->
  <ul>
    <li v-for="(serie, i) in this.store.apiInfo.series">
      <p class="mb-1">Serie numero {{ i }}:</p>
      <img :src="this.store.apiInfo.imgUrl + this.store.apiInfo.endpoints.width + serie.poster_path" alt="serie">
      <p>{{ serie.name }}</p>
      <p>{{ serie.original_name }}</p>
      <img v-if="serie.original_language === 'it'" src="/img/italy.jpeg" alt="italy" class="language"></img>
      <img v-else-if="serie.original_language === 'en'" src="/img/england.jpg" alt="england" class="language"></img>
      <p v-else>{{ serie.original_language }}</p>
      <p class="mb-1">{{ roundVoteAverage(serie.vote_average) }}</p>
      <i class="fa-solid fa-star"></i>
      <i class="fa-regular fa-star"></i>
    </li>
  </ul>
</template>
<style lang="scss" scoped>
.mb-1 {
  margin-bottom: 1rem;
}

.language {
  width: 1rem;
}
</style>
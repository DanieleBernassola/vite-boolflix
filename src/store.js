import { reactive } from "vue";

export const store = reactive({
  apiInfo: {
    apiUrl: "https://api.themoviedb.org/3",
    apiKey: "f97905b57fea0e97859cebdf491d7a7a",
    searchQuery: "",
    movies: [],
    series: [],
    // VARI ENDPOINT PER SEZIONI RICERCA API
    endpoints: {
      movies: "/search/movie",
      tvs: "/search/tv",
      genre: "/genre/movie/list",
    },
  },
});

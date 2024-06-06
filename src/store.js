import { reactive } from "vue";

export const store = reactive({
  apiInfo: {
    apiUrl: "https://api.themoviedb.org/3/search/movie",
    apiKey: "f97905b57fea0e97859cebdf491d7a7a",
    searchQuery: "",
  },
});

<script>
import SearchComponent from './components/SearchComponent.vue';
import AppMain from './components/AppMain.vue';
import { store } from './store';
export default {
  name: 'AppComponent',
  data() {
    return {
      store,
    }
  },
  components: {
    SearchComponent,
    AppMain
  }
}
</script>
<template>
  <h1>Boolflix</h1>
  <searchComponent></searchComponent>
  <AppMain></AppMain>
</template>
<style>
* {
  margin-left: 0.25rem;
}
</style>
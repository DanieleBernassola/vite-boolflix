import { createApp } from "vue";
// import style
import "./assets/scss/main.scss";
// import vue root component
import App from "./App.vue";
// import libreria fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
// import font awesome
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// import stella solid
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
library.add(faStarSolid);
// import stella regular
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
library.add(faStarRegular);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");

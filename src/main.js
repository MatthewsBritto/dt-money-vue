import './assets/main.css';
import { theme } from './types/theme'; // Ajuste o caminho conforme necessário
import { ThemeProvider } from 'vue3-styled-components';
import { createApp } from 'vue';
import App from './App.vue';
import { OhVueIcon, addIcons } from "oh-vue-icons";


const app = createApp(App);

app.use(ThemeProvider, {
  theme, // Prover o tema globalmente
});

app.mount('#app');

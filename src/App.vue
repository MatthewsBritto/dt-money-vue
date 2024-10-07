<script setup>
import { ref, onMounted } from 'vue';
import Header from './components/Header.vue';
import {  ThemeProvider } from '@vue-styled-components/core'
import { theme } from './types/theme'
import Transations from './components/Transations.vue';


var count = ref(0)
 // Verifique o caminho
 var transations = ref([
   {
    title:"Entradas",
    value:"17.000,00",
    type: "in",
    updatedAt: "Última entrada em 13 de abril"
  },
  {
    title:"Saidas",
    value:"9.000,00",
    type: "out",
    updatedAt: "Última saida em 10 de abril"
  },
  {
    title:"Total",
    value:"8.000,00",
    type: "in",
    updatedAt: "Última entrada em 13 de abril"
  },
 ]);

// Restante do seu código...
</script>

<template>
  <ThemeProvider :theme="theme">
    <Header />
   <Transations :transations="transations" />
  </ThemeProvider>
</template>

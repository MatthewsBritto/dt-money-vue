<script setup>
import { ref, onMounted } from 'vue';
import Header from './components/styled-components/Header.vue';
import {  ThemeProvider } from '@vue-styled-components/core'
import { theme } from './types/theme'


var count = ref(0)
 // Verifique o caminho

// Restante do seu código...
</script>

<template>
  <ThemeProvider :theme="theme">
    <Header />
  </ThemeProvider>
</template>

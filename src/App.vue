<script setup lg="ts">
import { ref, onMounted } from 'vue';
import Header from './components/Header.vue';
import {  ThemeProvider } from '@vue-styled-components/core'
import { theme } from './types/theme'
import Transations from './components/Transations.vue';
import Input from './components/Input.vue';
import List from './components/List.vue';
import { sortTransactionByDate } from '@/utils/sortTransactionByDate'

import axios from 'axios';



var count = ref(0)
 
const transactions = ref([]);


  // Trocar nome da variavel para transitionsTypes
 var mainTransactions = ref([
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

 onMounted(async () => {
  try {
    // Simulação de api
    const response = await axios.get('/src/api/data.json');
    if (response.status !== 200) {
      throw new Error("Erro ao carregar JSON");
    }

    transactions.value = sortTransactionByDate(response.data)
    
  } catch (e) {
    console.log(e);
  }
 })

</script>

<template>
  <ThemeProvider :theme="theme">
    <Header />
   <Transations :transations="mainTransactions" />
   <Input />
   <List :transactions="transactions" />
  </ThemeProvider>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Header from './components/Header.vue';
import {  ThemeProvider } from '@vue-styled-components/core'
import { theme } from './types/theme'
import Transations from './components/Transations.vue';
import Input from './components/Input.vue';
import List from './components/List.vue';
import { sortTransactionByDate } from '@/utils/sortTransactionByDate'

import axios from 'axios';
import { TransactionType } from './types/transationsType';

var totalIn = ref(0);
var totalOut = ref(0);
var transactionsTotal = ref(0)
 
const transactions = ref<TransactionType[]>([]);

  // Trocar nome da variavel para transitionsTypes
 var mainTransactions = ref<TransactionType[]> ([]);

  function calculateAllTransactions(transactions: TransactionType []) {
    var contadorIn = 0;
    var contadorOut = 0;
    console.log(transactions.length)

    const allInputTransactions = transactions.filter(item => {
      if (item.type === "in") {
        return item
      }
    })

    const allOutputTransactions = transactions.filter(item => {
      if (item.type === "out") {
        return item
      }
    })
    
    const Out = totalOut.value = allOutputTransactions.reduce((contadorOut, item) => {
      return contadorOut + Number(item.value);
    }, 0)

    const In = allInputTransactions.reduce((contadorIn, item) => {
      return contadorIn + Number(item.value);
    }, 0);

    totalIn.value = In
    totalOut.value = Out
    
  }

 onMounted(async () => {
  try {
    // Simulação de api
    const response = await axios.get('/src/api/data.json');
    if (response.status !== 200) {
      throw new Error("Erro ao carregar JSON");
    }

    transactions.value = sortTransactionByDate(response.data)
    calculateAllTransactions(transactions.value)

    mainTransactions.value = [{
      id:1,
      title:"Entradas",
      value:totalIn.value.toFixed(2),
      type: "in",
      updatedAt: "Última entrada em 13 de abril"
    },
    {
      id:2,
      title:"Saidas",
      value: totalOut.value.toFixed(2),
      type: "out",
      updatedAt: "Última saida em 10 de abril"
    },
    {
      id:3,
      title:"Total",
      value:(Number(totalIn.value) - Number(totalOut.value)).toFixed(2),
      type: "in",
      updatedAt: "Última entrada em 13 de abril"
    },
  ];
  
    
  } catch (e) {
    console.log(e);
  }
 })
</script>

<template>
  <ThemeProvider :theme="theme">
    <Header />
   <Transations :transations="mainTransactions" />
   <Input :qtdTransactions="transactionsTotal"/>
   <List :transactions="transactions" />
  </ThemeProvider>
</template>

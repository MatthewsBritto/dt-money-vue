<script lang="ts" setup >
import { TransactionType } from '@/types/transationsType';
import { styled } from '@vue-styled-components/core';
import ListCard from './ListCard.vue';

const props = defineProps<{ transactions: TransactionType[] }>()

const ListContainer = styled.ul`
  max-height: 200vh;
  padding:0 2rem;
  position:relative;
  top: -40px;
  display:flex;
  flex-direction:column;
  gap:1rem;
  max-width:calc(100% - 8rem);

  @media (min-width:1280px){
    max-width:1280px;
    margin:0 auto;
  }
`

</script>

<template>
  <ListContainer>
    <ListCard
      v-for="transaction in props.transactions"   
      :key="transaction.id.toString()"
      :type="transaction.type"
      :updatedAt="transaction.updatedAt"
      :title="transaction.title"
      :id="transaction.id"
      :value="transaction.value"
    />
  </ListContainer>
</template>
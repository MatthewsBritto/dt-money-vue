<script setup>
import { styled } from '@vue-styled-components/core'
import Card from './Card.vue';

const props  = defineProps({
  transations: [{

  }]
})

const Container = styled.div`
    position: relative;
    top: -8rem;
    overflow-y: hidden;
    max-width: 1280px;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    gap: 1.5rem;

`

</script>

<template>
   <Container>
      <div v-for="transation in transations" :key="transation.id">
        <Card 
          :value="transation.value "
          :title=" transation.title " 
          :updatedAt=" transation.updatedAt "/>
      </div>
    </Container>
</template>
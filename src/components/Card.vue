<script setup lang="ts">
import { styled } from '@vue-styled-components/core'
import { Icon } from '@iconify/vue'

const props = defineProps({
  title:  String,
  value: Number,
  updatedAt: String,
  type: String,
})

const CardContainer = styled.div`
  min-width:28rem;
  height:15rem;
  border-radius:8px;
  background-color: ${(props) => props.theme.colors.gray4};  
  font-family: ${(props) => props.theme.fonts.main};
  color: ${(props) => props.theme.colors.white};

  header {
    display:flex;
    height:3.2rem;
    align-items:center;
    justify-content:space-between;
    padding:.5rem 2rem;
    font-size:1.2rem;
  }

  h1 {
    font-size:3rem;
    padding: 2rem 2rem .5rem;
  }

  span{
    padding:.5rem 2rem;
    font-size:1.2rem;
  }

`

</script>

<template>
  <CardContainer>
    <header>
      <h3>{{ props.title }}</h3>
      <Icon icon="ph:arrow-circle-up" color="#00B37E" width="3rem" height="3rem"/>
      
    </header>
    
    <h1>R$ {{ props.value }}</h1>
    <span>{{ props.updatedAt }}</span>
  </CardContainer>
</template>
<script setup lang="ts">
import { styled } from '@vue-styled-components/core'
import { Icon } from '@iconify/vue'
import { ref } from 'vue';

const props = defineProps({
  id: Number,
  title:  String,
  value: String,
  updatedAt: String,
  type: String,
})

const color = ref( 
  ( props.title === "Entradas" && "#00B37E" ) || 
  ( props.title === "Saidas" && "#F75A68" ))

const icon = ref(
  ( props.title === "Entradas" && "ph:arrow-circle-up" )||
  (props.title === "Saidas" && "ph:arrow-circle-down")||
  "ph:currency-dollar"
)  

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
    padding:1.5rem 2rem;
    font-size:1.2rem;    
 
    h3 {
      color: ${(props) => props.theme.colors.gray6 }; 
      font-weight:400;
      letter-spacing:.12rem;
    }

    svg {
      height:3rem;
      width:3rem;
    }
  }

  h1 {
    font-size:3rem;
    padding: 0rem 2rem .5rem;
  }

  span{
    padding:0 2rem;
    font-size:1.2rem;
    letter-spacing:.12rem;
    color: ${(props) => props.theme.colors.gray6 }; 
  }

  @media (min-width:1280px){
    width:35.2rem;

    header {
      h3 {
        font-size:2rem;
      }
    }
  }
`

</script>

<template>
  <CardContainer>
    <header>
      <h3>{{ props.title }}</h3>
      <Icon :icon="icon" :color="color" />
    </header>
    
    <h1>R$ {{ props.value }}</h1>
    <span>{{ props.updatedAt }}</span>
  </CardContainer>
</template>
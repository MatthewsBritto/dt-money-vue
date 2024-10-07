<script lang="ts" setup>
import { Icon } from '@iconify/vue';
import { styled } from '@vue-styled-components/core';

const InputContainer = styled.div`
  /* height:100%; */
  position:relative;
  top:-6rem;
  padding:0 2rem;
  font-family: ${(props) => props.theme.fonts.main};
  display:flex;
  flex-direction:column;
  gap:1rem;
  max-width:1280px;
  margin: 0 auto;

  header {
    display:flex;
    width:100%;
    justify-content:space-between;
    align-items:center;

    h3 {
      font-size: 1.8rem;
      color:${(props) => props.theme.colors.gray6 };
      font-weight:400;
    }

    span {
      font-size: 1.6rem;
      color:${(props) => props.theme.colors.gray5 };
    }
  }

  div {
   display:flex;
   gap:1rem;
   align-items:center;
   height:100%;
   
  }
`

const Input = styled.input`
  height:4.5rem;
  width: 100%;
  border-radius:8px;
  border:none;
  outline:none;
  padding:.5rem 1rem;
  background-color:${(props) => props.theme.colors.gray};
  color:${(props) => props.theme.colors.white};
`
const Button = styled.button`
  height:5.4rem;
  width:5.4rem;
  border-radius:8px;
  border:1px solid ${(props) => props.theme.colors.greenLight};
  outline:none;
  background-color:${(props) => props.theme.colors.gray3};
  color:${(props) => props.theme.colors.greenLight};

  svg {
    height:100%;
    width:2rem;
  }  

  p {
    display:none;
  }

  @media (min-width:1280px){
    display:flex;
    width:14.7rem;
    align-items:center;
    justify-content:center;
    gap:1rem;

    p {
      display:block;
      font-weight:bold;
      color:${(props) => props.theme.colors.greenLight};
    }
  }
`

</script>

<template>
  <InputContainer>
    <header>
      <h3>Transações</h3>
      <span>4 itens</span>
    </header>
    <div>
      <Input type="text" placeholder="Busque uma transação"/>
      <Button type="button"> 
        <Icon icon="ph:magnifying-glass-bold" />
        <p>
          Buscar
        </p>
      </Button>
    </div>
   </InputContainer>
</template>

<style scoped>

</style>
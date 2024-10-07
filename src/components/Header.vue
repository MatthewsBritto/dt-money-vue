<script setup lang="ts">
import { styled } from '@vue-styled-components/core'
import Logo from '../assets/IgniteSimbol.png'

const Header = styled.header`
  width: 100%;
  height: 20rem;
  background-color: ${(props) => props.theme.colors.gray};

`
const LogoStyle = styled.img` 
  width: 2.4rem;
  height: 2.4rem;
`
const HeaderContainer = styled.div`
  max-width:1280px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height:10vh;
  padding:0 1.6rem;
  margin:0 auto;

  div {
    height:3.8rem;
    display: flex;
    gap:.5rem;
    align-items:center;
    padding: 0 1.6rem;

    h1 {
      font-size: 1.8rem;
      font-weight: 100;
      color: white;
      font-family: sans-serif;
      text-transform: capitalize;
    }
  }

  button {
    height: 3.8rem;
    padding:0 1.2rem;
    background-color: ${(props) => props.theme.colors.green};
    border:none;
    border-radius:8px;
    color: ${(props) => props.theme.colors.white};
    font-weight:bold;
    text-transform:capitalize;
    font-family: ${(props) => props.theme.fonts.main};

    &:hover{
      background-color: ${(props) => props.theme.colors.greenLight};
      transition: all 1s ease-out;
    }
  };
`
function teste(){
  console.log("teste")
}
</script>

<template>
  <Header>
    <HeaderContainer>
      <div>
        <LogoStyle :src="Logo" />
        <h1>DT Money</h1>
      </div>
  
      <button @click="teste"> 
          Nova transação
      </button>
    </HeaderContainer>
  </Header>
</template>
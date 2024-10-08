<script lang="ts" setup >
import { styled } from '@vue-styled-components/core'
import { Icon } from '@iconify/vue'

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

const TransationCard = styled.li`
  width:100%;
  height:14rem;
  padding:2rem;
  list-style:none;
  border-radius:8px;
  font-family:${(props) => props.theme.fonts.main};
  background-color:${(props) => props.theme.colors.gray3};
  display:flex;
  flex-direction:column;
  justify-content: space-evenly;

  h3 {
    font-size: 1.6rem;
    color: ${(props) => props.theme.colors.gray6};
  }
  h2 {
    font-size:2rem;
    font-weight: bold;
    color: ${(props) => props.theme.colors.greenLight};
  }
  div {
    width:100%;
    display:flex;
    justify-content:space-between;
    font-size: 1.6rem;
    color:${(props) => props.theme.colors.gray5};
    align-items:center;
    
    span {
      display:flex;
      align-items:center;
      gap:0.5rem;
    }
  }

  @media (min-width:1280px) {
    width:1280px;
    display:grid;
    grid-template-columns: 3fr 2fr 2fr;
    align-items:center;
    padding:0;
    height:6.6rem;

    h3 {
      padding-left:2rem;
    }

    div {
      justify-content:space-evenly;
    }
  }

`

</script>

<template>
  <ListContainer>
    <TransationCard>
      <h3>Desenvolvimento de site</h3>
      <h2>R$ 12.000,00</h2>

      <div>
        <span>
          <Icon icon="ph:tag-simple" width="1.5rem" height="1.5rem" />
          Venda
        </span>

        <span>
          <Icon icon="ph:calendar-blank" width="1.5rem" height="1.5rem" />
          13/04/2022
        </span>
      </div>
    </TransationCard>
  </ListContainer>
</template>
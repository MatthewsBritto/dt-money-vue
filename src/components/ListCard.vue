
<script lang="ts" setup>
import { styled } from '@vue-styled-components/core'
import { Icon } from '@iconify/vue'
import type { TransactionType } from '@/types/transationsType';
import { ref } from 'vue';
import { dateFormatter } from '../utils/dateFormatter'

const props = defineProps<TransactionType>()

// Logica para setar cor da linha
const color = ref(props.type == 'in' ? '#00B37E' : '#F75A68')

const date = ref(dateFormatter(props.updatedAt.toString()))

const TransactionCard = styled.li`
  width: 100%;
  height: 14rem;
  padding: 2rem;
  list-style: none;
  border-radius: 8px;
  font-family: ${(props) => props.theme.fonts.main};
  background-color: ${(props) => props.theme.colors.gray3};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  h3 {
    font-size: 1.6rem;
    color: ${(props) => props.theme.colors.gray6};
  }
  
  h2 {
    font-size: 2rem;
    font-weight: bold;
    color: ${(props) => color.value };
  }

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 1.6rem;
    color: ${(props) => props.theme.colors.gray5};
    align-items: center;

    span {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }

  @media (min-width: 1280px) {
    width: 1280px;
    display: grid;
    grid-template-columns: 3fr 2fr 2fr;
    align-items: center;
    padding: 0;
    height: 6.6rem;

    h3 {
      padding-left: 2rem;
    }

    div {
      justify-content: space-between;

      span {
        padding-right: 2rem;
      }
    }
  }
`;

</script>

<template>
  <TransactionCard 
    :type="props.type" 
    :key="props.id.toString()"
  >
    <h3>{{ props.title }}</h3>
    <h2 :color="color">{{ props.value }}</h2>

    <div>
      <span>
        <Icon icon="ph:tag-simple" width="1.5rem" height="1.5rem" />
        {{ props.title }}
      </span>

      <span>
        <Icon icon="ph:calendar-blank" width="1.5rem" height="1.5rem" />
        {{  date }}
      </span>
    </div>
  </TransactionCard>
</template>

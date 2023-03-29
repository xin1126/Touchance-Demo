<script setup>
import { storeToRefs } from 'pinia'
import { useKeepStore } from '@/stores/keepData'

const keepStore = useKeepStore()
const { keepData } = storeToRefs(keepStore)
</script>

<template>
  <nav>
    <router-link to="/lazyLoading">Lazy Loading</router-link>
    <router-link to="/pagination">Pagination </router-link>
    <router-link to="/keep">Keep ({{ keepData.length }})</router-link>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: center;
  background: white;
  padding: 1rem 0;
  filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
  a {
    margin-right: 2rem;
    color: black;
    text-decoration:none;
    &:hover {
      color: cadetblue;
    }
  }
}
.router-link-active {
  color: cadetblue;
}
</style>
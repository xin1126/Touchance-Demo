<script setup>
defineProps({
  pageStatus: {
    type: Object,
    require: true,
  }
})

defineEmits(['getCurPage'])
</script>

<template>
  <ul>
    <li 
      v-for="item in pageStatus.totalPage" 
      :key="item"
      :class="{ currentPage: item === pageStatus.currentPage }"
      @click="$emit('getCurPage', item)"
    >
      {{ item }}
    </li>
  </ul>
</template>

<style lang="scss" scoped>
ul {
  list-style: none;
  display: flex;
  justify-content: center;
  margin: -1rem 0 1rem;
  li {
    margin-right: 1rem;
    cursor: pointer;
    &:hover {
      color: red;
    }
    &.currentPage {
      color: red;
    }
  }
}
</style>
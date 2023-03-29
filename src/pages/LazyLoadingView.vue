<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useTotalStore } from '@/stores/totalData'
import Table from '@/components/Table.vue'

const table = ref(null)

const useTotal = useTotalStore()
const { data1 } = storeToRefs(useTotal)

let listNum = 50
const mainData = ref(data1.value.slice(0, 50))
const lazyTable = () => {
  const scrollTop = table.value.scrollTop + 800
  const scrollHeight = table.value.scrollHeight

  if (scrollTop > scrollHeight) { 
    listNum += 50
    mainData.value = data1.value.filter((item, index) => index < listNum)
  }
}
</script>

<template>
  <div ref="table" class="wrap" @scroll="lazyTable">
    <Table :mainData="mainData" />
  </div>
</template>

<style>
.wrap {
  height: calc(100vh - 200px);
  overflow-y: scroll;
}
</style>
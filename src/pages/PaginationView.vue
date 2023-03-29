<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useTotalStore } from '@/stores/totalData'
import Table from '@/components/Table.vue'
import Pagination from '@/components/Pagination.vue'

const useTotal = useTotalStore()
const { data1 } = storeToRefs(useTotal)

const mainData = ref([])
const handlePage = (min, max) => {
  mainData.value = data1.value.filter((i, key) => key + 1 >= min && key + 1 <= max)
}

const pagNum = 50
const pageStatus = ref({
  totalPage: Math.ceil(data1.value.length / pagNum),
  currentPage: 1,
})
const getCurPage = (num) => {
  const min = num * pagNum - pagNum + 1
  const max = num * pagNum
  pageStatus.value.currentPage = num
  handlePage(min, max)
}
getCurPage(1)
</script>

<template>
  <Pagination :pageStatus="pageStatus" @getCurPage="getCurPage" />
  <Table :mainData="mainData" />
</template>
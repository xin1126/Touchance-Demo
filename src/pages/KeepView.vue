<script setup>
import { ref, onMounted, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useTotalStore } from '@/stores/totalData'
import { useKeepStore } from '@/stores/keepData'
import Table from '@/components/Table.vue'

const useTotal = useTotalStore()
const { data1 } = storeToRefs(useTotal)

const keepStore = useKeepStore()
const { keepData } = storeToRefs(keepStore)

const mainData = ref([])

const handleKeepData = () => { 
  mainData.value = data1.value.filter((item) => keepData.value.includes(item.key))
}

watch(keepData, () => handleKeepData())

onMounted(() => {
  handleKeepData()
})
</script>

<template>
  <Table :mainData="mainData" />
</template>
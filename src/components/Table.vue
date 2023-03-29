<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useTotalStore } from '@/stores/totalData'
import { useKeepStore } from '@/stores/keepData'

defineProps({
  mainData: {
    type: Array,
    default: () => []
  }
})

const targetList = ref('')

const totalStore = useTotalStore()
const { data2, data3 } = storeToRefs(totalStore)

const keepStore = useKeepStore()
const { keepData } = storeToRefs(keepStore)
const { toggleStar } = keepStore
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>KEY</th>
        <th v-for="num in 9" :key="num">CELL{{ num }}</th>
      </tr>
    </thead>
    <tbody v-if="mainData.length">
      <template v-for="(list, index) in mainData" :key="list.key" >
        <tr
          :class="{ selected: targetList === list.key }"
          @click="targetList = list.key" 
        >
          <td>
            <span 
              :class="['star', { selected: keepData.includes(list.key) }]"  @click="toggleStar(list.key)">
            </span>
            {{ list.key }}
          </td>
          <td v-for="num in 7" :key="num">{{ list[`cell${num}`] }}</td>
          <td>{{ data2[list.key] }}</td>
          <td>{{ data3[list.cell4] }}</td>
      </tr>
      </template>
    </tbody>
    <tbody v-else>
      <tr>
        <td colspan="10">No Data</td>
      </tr>
    </tbody>
  </table>
</template>
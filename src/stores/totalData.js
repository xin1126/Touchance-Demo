import { defineStore } from 'pinia'
import useFetch from '@/hooks/useFetch'

export const useTotalStore = defineStore('totalStore', {
  state: () => ({
    data1: [],
    data2: {},
    data3: {},
  }),
  actions: {
    async getTotalData() {
      this.data1 = await useFetch('data/data1.json')

      const tempData2 = await useFetch('data/data2.json')
      const tempObj2 = {}
      tempData2.forEach((item) => {
        tempObj2[item.key] = item.cell8
      });
      this.data2 = tempObj2

      const tempData3 = await useFetch('data/data3.json')
      const tempObj3 = {}
      Object.values(tempData3).forEach((item) => {
        tempObj3[item.cell4] = item.cell9
      });
      this.data3 = tempObj3
    },
  },
})

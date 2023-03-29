import { defineStore } from 'pinia'

export const useKeepStore = defineStore('keepStore', {
  state: () => ({
    keepData: JSON.parse(localStorage.getItem('keep')) || [],
  }),
  actions: {
    toggleStar(key) {
      if (this.keepData.includes(key)) {
        this.keepData = this.keepData.filter((item) => key !== item)
      } else {
        this.keepData.push(key)
      }

      localStorage.setItem('keep', JSON.stringify(this.keepData));
    },
  },
})
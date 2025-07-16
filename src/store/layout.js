// src/store/layout.js
import { defineStore } from 'pinia'

export const useLayoutStore = defineStore('layout', {
  state: () => ({
    isCollapsed: false,
    isMobile: false
  }),
  actions: {
    toggleCollapse() {
      this.isCollapsed = !this.isCollapsed
    },
    checkMobile() {
      this.isMobile = window.innerWidth < 768
      if (this.isMobile) {
        this.isCollapsed = true
      }
    }
  }
})
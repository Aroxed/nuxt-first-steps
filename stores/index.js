import { defineStore } from 'pinia';

export const useMyStore = defineStore('myStore', {
    state: () => ({
      todoItem: {}
    }),
    actions: {
      async fetch() {
        const todoItem = await $fetch('https://jsonplaceholder.typicode.com/todos/1')
        this.todoItem = todoItem
      },
      setTitle(title) { 
        this.todoItem.title = title
      }
    }
  })
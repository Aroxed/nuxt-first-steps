<template>
    <div>Homepage
        <h1>Todo</h1>
        <p v-if="todoItem.id">
        <div>Title: {{ todoItem.title }}</div>
        <div>Completed: {{ todoItem.completed }}</div>
        <div>Id: {{ todoItem.id }}</div>
        <button @click="setTitle('abcd')"
            class="pointer-events-auto rounded-md bg-indigo-600 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500">Set
            ABCD as Title</button>
        </p>
        <p v-else>Loading..</p>

        <input type="text" v-model="todoItem.title" />

        <div>
            <Hello @nameChanged="nameChanged" />
        </div>
    </div>
</template>

<script setup lang="ts">
let name = useState('name', () =>'Mark')
import { useMyStore } from '@/stores/index.js';
const mystore = useMyStore()

// use store variable
const todoItem = mystore.todoItem

// fill it, loading from server
await callOnce(mystore.fetch)

// use store method to update the variable
const { setTitle } = mystore

// listen to variable changes
watch(() => todoItem.title, (v) => {
    alert(v)
})

const nameChanged = (v) => { alert(v) }
</script>
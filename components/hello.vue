<template>
    Hello, {{ name }}
    <button @click="$emit('nameChanged', 'bob')">Change name</button>
</template>

<script setup lang="ts">
const name = ref("Ann")
</script>
<script setup lang="ts">
const { isOpen, toggle } = useDisclosure();
</script>

<template>
  <div>
    <div class="bg-brand text-secondary-200 prose lg:prose-xl">You can use Tailwind colors!</div>
    <div v-if="isOpen">hello</div>
    <SfButton @click="toggle()">Toggle</SfButton>
  </div>
</template>

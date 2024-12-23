<script setup lang="ts">
type Opacity = 'bg-opacity-10' | 'bg-opacity-100'

defineProps<{
  label: string,
  opacity: Opacity
}>()
</script>

<template>
  <Button :class="`rounded-xl bg-customPink ${opacity}`">
    {{ label }}
  </Button>
</template>
<script setup lang="ts">
import { Icon } from "@iconify/vue"

defineProps<{
  promotion: number
}>()
</script>

<template>
    <div class="flex bg-[url('/BG.webp')] bg-cover bg-left rounded-2xl">
      <div class="py-16 pl-20">
        <h2 class="text-3xl custom-font-bold mb-4">
          {{ promotion }}% Discount!
        </h2>
        <p class="text-xl max-w-xs mb-4">Get a discount on certain days and don’t miss it.</p>
        <Icon 
          class="rounded-full p-1 bg-customPink" 
          icon="system-uicons:arrow-top-right" 
          width="2em" 
          height="2em" 
          color="white"
        />
      </div>
      <img 
        class="ml-auto transform scale-translate" 
        src="/image.svg"
        alt="Image building call to Action"
      >
    </div>
</template>
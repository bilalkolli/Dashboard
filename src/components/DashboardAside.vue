<script setup lang="ts">
import { Icon } from "@iconify/vue"
import productDetail from "./productDetail.vue"
import type { IUser } from "@/types/IUser"

defineProps<{
  User : IUser
}>()
</script>

<template>
  <section class="bg-light-gray p-10 text-dark-purple min-w-96">
  <div class="flex gap-2 items-center mb-24 justify-end text-[#858688]">
    <Icon 
      class="mr-8" 
      icon="tdesign:notification" 
      width="1.7em" 
    />
    <img 
      :src="User.icon"
      width="45px"
      height="45px"
      alt="User Icon" 
    />
    <Icon icon="iconoir:nav-arrow-down" width="1.7em" height="1.7em" />
  </div>

  <div>
    <h3 class="text-2xl custom-font-bold mb-5">Product Details</h3>
    <productDetail />
  </div>
</section>
</template>
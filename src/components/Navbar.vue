<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from "@iconify/vue"

const mainpages = ref([
  { name: "Dashboard", icon: "/home.svg" },
  { name: "Discover", icon: "/discover.svg" },
  { name: "My order", icon: "/box.svg" },
  { name: "Message", icon: "/message.svg" },
  { name: "My Profile", icon: "/profile-circle.svg" }
])

const sidepages = ref([
  { name: "Help & Support", icon: "solar:danger-circle-linear" },
  { name: "Log Out", icon: "ic:outline-log-in" }
])
</script>

<template>
  <header class="flex flex-col min-w-64 py-12 px-8 bg-white">
    <nav>
      <img 
        class="mb-20 hover:cursor-pointer" 
        src="/Logo.svg" 
        width="120px" 
        height="34px"
        alt="logo of the Dashboard"
      >

      <div v-for="mainpage in mainpages" :key="mainpage.name" class="py-4">
        <div 
          class="flex gap-3 hover:cursor-pointer"
          :class="{'text-customPink text-lg gap-5': mainpage.name === mainpages[0].name}"
        >
          <img 
            :src="mainpage.icon"
            :alt="mainpage.name"
            width="25px"
            height="24px"
          />
          {{ mainpage.name }}
        </div>
      </div>
    </nav>

    <nav class="mt-auto mb-32">
      <hr class="border-t border-custom-gray opacity-50">
      <div class="custom-font-bold text-deep-teal my-8">Other</div>

      <div v-for="sidepage in sidepages" :key="sidepage.name" class="pb-6">
        <div class="flex gap-3 hover:cursor-pointer">
          <Icon :icon="sidepage.icon" width="1.7em" height="1.7em" />
          <span :class="{'font-bold': sidepage.name === sidepages[sidepages.length - 1].name}">
            {{ sidepage.name }}
          </span>
        </div>
      </div>
    </nav>
  </header>
</template>
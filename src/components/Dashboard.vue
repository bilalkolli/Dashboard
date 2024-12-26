<script setup lang="ts">
import Ubutton from "./Ubutton.vue"
import Cta from "./Cta.vue"
import ProductCard from "./ProductCard.vue"
import ProductSuggestion from "./ProductSuggestion.vue"
import DashboardAside from "./DashboardAside.vue"
import type { IUser } from "@/types/IUser"

const User: IUser = {
    name: 'Thomas',
    icon : '/userIcon.svg'
}
</script>

<template>
  <section class="bg-light-gray py-10 px-10 text-dark-purple">
    <div class="flex justify-between items-start mb-10">
      <div>
        <h1 class="text-3xl mb-2 custom-font-bold">
          Good Morning, 
          <span class="text-customPink">Welcome {{ User.name }}</span>
        </h1>
        <p class="text-light-blue text-lg">
          Find out the value of your house and follow it over time.
        </p>
      </div>

      <div class="flex items-center custom-font-bold rounded-xl bg-white p-2">
        <Ubutton 
          class="px-8 py-2" 
          label="Buy" 
          :opacity="'bg-opacity-10'" 
        />
        <p class="px-6">Rent</p>
      </div>
    </div>

    <Cta :promotion="10" />
    <ProductCard />
    <ProductSuggestion />
  </section>

    <DashboardAside :User="User" />
</template>
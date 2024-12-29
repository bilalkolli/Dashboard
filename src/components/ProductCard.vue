<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from "@iconify/vue"
import Ubutton from './Ubutton.vue'
import type { IProductCard } from "@/types/IProductCard"

const baseProduct: IProductCard = {
  price: 546.999,
  Bedrooms: 3,
  Bathrooms: 2,
  LivingArea: 600,
  Adress: "2913 Frank Avenue Springfield, MA 01105",
  features: [
    { icon: "ic:sharp-bed", value: 3, label: "Bedrooms" },
    { icon: "fa:bath", value: 2, label: "Bathrooms" },
    { icon: "gis:square-pt", value: 600, label: "Living Area" },
  ],
  Image: "image4.jpg"
}

// Génération des 3 produits avec des images uniques
const products = ref<IProductCard[]>(
  ['image4.jpg', 'image5.jpg', 'image6.jpg'].map((img) => ({
    ...baseProduct,
    Image: img,
  }))
);

const titles = ['Location', 'Type']
</script>

<template>
  <div class="my-7">
    <h5 class="custom-font-bold text-2xl">Find your Best House</h5>
    <div class="flex items-end justify-evenly gap-6 mt-6">
      <div 
        v-for="(title, index) in titles" 
        :key="index" 
        class="flex flex-col"
      >
        <label :for="title" class="mb-1 text-lg text-gray-600" :class="{ 'ml-2': index === 0 }">{{ title }}</label>
        <div class="relative">
          <Icon 
            :icon="index === 0 ? 'hugeicons:location-01' : 'lucide:home'" 
            class="absolute left-3 top-1/2 transform -translate-y-1/2" 
            color="#858688" 
            width="1.5em" 
            height="1.5em" 
          />
          <input
            :id="title"
            :placeholder="index === 0 ? 'California' : 'Industrial Home'"
            class="pl-11 p-3 rounded-lg border-[1px] border-[#858688] border-opacity-20 bg-light-gray min-w-96 placeholder:text-[#858688]"
          />
        </div>
      </div>

      <Ubutton class="px-9 py-3 text-white custom-font-bold" label="Search" :opacity="'bg-opacity-100'" />

      <div class="bg-white flex items-center rounded-lg px-5 py-3">
        <Icon icon="solar:filter-linear" width="1.7em" color="7C8DA6" />
      </div>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
    <div v-for="(product, index) in products" :key="index" class="rounded-xl p-3 bg-white">
      <img :src="product.Image" width="310px" alt="House Image" class="rounded-lg mb-4" />
      <p class="text-2xl custom-font-bold mb-2">${{ product.price }}</p>
      
      <div class="flex gap-10 mb-4">
        <div v-for="(feature, featureIndex) in product.features" :key="featureIndex" class="text-center">
          <p class="flex gap-2 items-center custom-font-bold">
            <Icon :icon="feature.icon" width="1em" height="1em" />
            <span v-if="feature.label === 'Living Area'">{{ feature.value }}m</span>
            <span v-else>{{ feature.value }}</span>
          </p>
          <p class="text-light-blue text-xs">{{ feature.label }}</p>
        </div>
      </div>

      <hr class="border-t border-custom-gray opacity-10 ">
      <div class="flex items-center gap-2 mb-4 mt-5">
        <Icon icon="hugeicons:location-01" color="#7C8DA6" width="1.5em" class="mb-4" />
        <p class="text-sm text-[#7C8DA6] max-w-40">{{ product.Adress }}</p>
        <Ubutton 
          class="px-7 py-2 text-white bg-blue-600 rounded-lg"
          label="View"
          opacity="bg-opacity-100" 
        />
      </div>
    </div>
  </div>
</template>
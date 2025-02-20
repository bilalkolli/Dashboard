<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from "@iconify/vue"
import Ubutton from './Ubutton.vue'
import type { IFeature } from "@/types/IFeature"
import type { IProductDetail } from "@/types/IProductDetail"

const product = ref<IProductDetail>({
  name: "Product Name",
  Bedrooms: 3,
  Bathrooms: 2,
  LivingArea: 600,
  Adress: "2913 Frank Avenue Springfield, MA 01105",
  Description:
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, injected humour.",
  Price: 25.5673,
  location: "Map.webp"
})

const features = ref<IFeature[]>([
  {
    icon: "ic:sharp-bed",
    value: product.value.Bedrooms,
    label: "Bedrooms"
  },
  {
    icon: "fa:bath",
    value: product.value.Bathrooms,
    label: "Bathrooms"
  },
  {
    icon: "gis:square-pt",
    value: product.value.LivingArea,
    label: "Living Area"
  }
])

const images = ref([
  { src: "/image2.webp", alt: "Image 2" },
  { src: "/image3.webp", alt: "Image 3" }
]);
</script>

<template>
    <div class="flex flex-col rounded-xl bg-white px-3 py-7 min-w-72">
      <img class="pb-3" src="/image1.webp" width="330" alt="Main Image" />
      <div class="flex space-x-2">
        <img 
          v-for="(image, index) in images" 
          :key="index" 
          :src="image.src" 
          width="160" 
          :alt="image.alt" 
        />
      </div>
    <div class="ml-3">
      <h5 class="text-xl custom-font-bold my-4">
        {{ product.name }}
      </h5>
      <div class="flex gap-10 mb-2">
        <div v-for="(feature, index) in features" :key="index">
          <p class="flex gap-2 items-center custom-font-bold">
            <Icon 
              :icon="feature.icon" 
              width="1em" 
              height="1em" 
            />
            <span v-if="feature.label === 'Living Area'">{{ feature.value }}m</span>
            <span v-else>{{ feature.value }}</span>
          </p>
          <p class="text-light-blue text-xs">{{ feature.label }}</p>
        </div>
      </div>
      <p class="max-w-56 text-light-blue text-sm flex gap-1 py-2">
        <Icon icon="mynaui:location" width="2.3em"/>
        {{ product.Adress }}
      </p>
      <h5 class="text-lg custom-font-bold">Description</h5>
      <p class="custom-font-light max-w-80 my-3">{{ product.Description }}</p>
      <p class="text-customPink text-base">Read More</p>
    </div>

    <img 
      class="my-4" 
      :src="product.location" 
      alt="Location Map"  
    />
    
    <Ubutton
      class="px-2 py-4 text-white rounded-md custom-font-bold"
      :label="`Price: $${product.Price}`"
      opacity="bg-opacity-100"
    />
    </div>
</template>
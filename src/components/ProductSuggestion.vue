<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from "@iconify/vue"
import type { IHomeSuggestions } from "@/types/IHomeSuggestions"

const Suggestions = ref<string[]>([
    'Most Popular',
    'Special Offers',
    'Near Me'
])

const HomeSuggestions = ref<IHomeSuggestions[]>([
    {
        image: '/image8.svg',
        title: 'Sharma Springs 5 bds Luxurious',
        price: 2954.99,
        Location: '2913 Frank Avenue Springfield, 01105',
        features: [
            { icon: "ic:sharp-bed", value: 3 },
            { icon: "fa:bath", value: 2 },
            { icon: "gis:square-pt", value: 700 }
        ]
    },
    {
        image: '/image7.svg',
        title: 'Sharma Springs 5 bds Luxurious',
        price: 2954.99,
        Location: '2913 Frank Avenue Springfield, 01105',
        features: [
            { icon: "ic:sharp-bed", value: 3 },
            { icon: "fa:bath", value: 2 },
            { icon: "gis:square-pt", value: 700 }
        ]
    }
])
</script>

<template>
    <div class="flex gap-16 text-lg my-8">
        <p v-for="Suggestion in Suggestions" :key="Suggestion">
            {{ Suggestion }}
        </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div 
            v-for="(home, index) in HomeSuggestions" 
            :key="index" 
            class="bg-white rounded-lg flex p-3 gap-5"
        >
            <img 
                :src="home.image" 
                alt="Home Image" 
                width="125px" 
                class="rounded-lg" 
            />
            <div class="flex flex-col gap-1">
            <p class="custom-font-bold">{{ home.title }}</p>
            <p class="custom-font-bold text-customPink">${{ home.price }}</p>
            <div class="flex gap-10 text-[#7C8DA6]">
                <div 
                    v-for="(feature, featureIndex) in home.features" 
                    :key="featureIndex" 
                    class="text-center "
                >
                    <p class="flex items-center gap-2">
                        <Icon :icon="feature.icon" class="text-lg" />
                        <span v-if="feature.value === 700">{{ feature.value }}m</span>
                        <span v-else>{{ feature.value }}</span>
                    </p>
                </div>
            </div>
            <p class="text-sm text-[#7C8DA6] flex items-center gap-1.5 mt-2">
                <Icon icon="fluent:location-12-filled" width="1.25rem" />
                {{ home.Location }}
            </p>
             </div>
        </div>
    </div>
</template>
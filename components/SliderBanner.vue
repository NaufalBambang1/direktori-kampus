<template>
    <div class="flex py-[20px] gap-2 md:gap-10">
        <div
            class="w-1/6 min-h-[19vw] max-h-[27vw] md:max-h-[19vw] cursor-pointer bg-[position:100%_0] bg-cover"
            :style="{ backgroundImage: `linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.45) 100%), url(${getImageUrl(prevImage)})` }"
            @click="prevSlide">
        </div>
        <div class="w-3/4  flex-none overflow-hidden relative">
            <div class="relative flex w-full transition-transform duration-500 ease-in-out"
                :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
                <div v-for="item in banner" :key="item.id" class="flex-shrink-0 w-full max-h-[364px]">
                    <img :src="getImageUrl(item.image)" class="w-full h-full object-cover min-h-[19vw] max-h-[27vw] md:max-h-[19vw]"/>
                </div>
            </div>

            <div class="flex justify-center gap-2 pt-4">
                <div v-for="(item, index) in banner" :key="index" @click="currentIndex = index">
                    <div class="h-[12px] rounded-lg cursor-pointer" :class="currentIndex === index ? 'w-[24px] bg-[#0AA8C1]' : 'w-[12px] bg-[#D4E0E2]'"></div>
                </div>
            </div>
        </div>
        <div
            class="w-1/6 min-h-[19vw] max-h-[27vw] md:max-h-[19vw] cursor-pointer bg-cover bg-gradient-to-r from-white to-white/45"
            :style="{ backgroundImage: `linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.45) 100%), url(${getImageUrl(nextImage)})` }"
            @click="nextSlide">
        </div>
    </div>
</template>

<script setup>
import {useBanner} from '@/composables/fetchBanner'
const config = useRuntimeConfig()

const {
    banner,
    totalBanner,
    fetchBanner
} = useBanner()
const isDotActive = ref(false)

onMounted( async()=>{
    await fetchBanner()
})

const getImageUrl = (path) => {
    if(!path) return null
    return path.startsWith('http') ? path : `${config.public.API_BASE_URL}${path}`
}
const currentIndex = ref(0)

const prevImage = computed(() => {
    if (!banner.value.length) return null
    return currentIndex.value === 0 ? banner.value[banner.value.length - 1].image : banner.value[currentIndex.value - 1].image
});

const nextImage = computed(() => {
    if (!banner.value.length) return null
    return currentIndex.value === banner.value.length - 1 ? banner.value[0].image : banner.value[currentIndex.value + 1].image
});

const prevSlide = () => {
    if (!banner.value.length) return
    currentIndex.value = currentIndex.value === 0 ? banner.value.length - 1 : currentIndex.value - 1
};

const nextSlide = () => {
    if (!banner.value.length) return
    currentIndex.value = currentIndex.value === banner.value.length - 1 ? 0 : currentIndex.value + 1
};
</script>
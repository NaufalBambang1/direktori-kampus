<template>
    <div class="py-[20px] md:py-[72px] relative px-4">
        <div class="bg-dot left-20 top-[100px] -z-50 hidden lg:block"></div>
        <div class="container mx-auto">
            <div>
                <div class="text-center">
                    <h2 class="text-[#3C3B52] text-3xl font-bold mb-3">Rekomendasi Kampus</h2>
                    <p class="text-[#848B9D] text-sm">Memberikan sistim pelayanan untuk para calon mahasiswa Jawa Barat dan Banten</p>
                </div>
            </div>
            <div class="grid grid-cols-2 xl:grid-cols-4 gap-5 mt-6">
                <div v-for="(item, index) in kampus" :key="index+1">
                    <div class="relative">       
                        <img :src="getImageUrl(item.thumbnail)" alt="thumb" class="w-full h-[240px] object-cover rounded-lg relative -z-10">
                        <div class="absolute top-2 left-1">
                            <div v-if="item.is_campus_partner == true" class="bg-[#3A5AE3] rounded-4xl py-1 pl-2.5 flex gap-2">
                                <span class="text-white text-xs text-nowrap md:text-base content-center">Kampus Partner</span>
                                <div class="bg-[#5471ED] rounded-full w-[25px] h-[25px] items-center flex justify-center mr-1">
                                    <i class="fa-solid fa-check text-white"/>
                                </div>
                            </div>
                            <div v-if="item.is_campus_partner == true" class="bg-[#E83158] rounded-4xl mt-2 p-1 md:p-2 w-fit">
                                <span class="text-white bg-[#F35577] px-2 py-1 rounded-4xl text-xs md:text-base">{{ item.accreditation }}</span>
                            </div>
                        </div>
                        <div class="mt-[-130px] z-auto md:p-4">
                            <div class="bg-white rounded-lg w-fit mb-5 mx-4 p-3">
                                <img :src="getImageUrl(item.logo)" alt="logo" class="w-[49px] h-[50px] bg-white object-cover">
                            </div>
                            <div class="bg-white w-full p-3 md:p-4 rounded-lg shadow-[0px_10px_20px_0px_#EFF1F6]">
                                <h3 class="mb-2 min-h-[48px] line-clamp-2 text-xs md:text-base">{{ item.name }}</h3>
                                <div class="flex items-center gap-2 text-[#3A5AE3] mb-2" >
                                    <span class="line-clamp-1 text-xs md:text-base"><i class="fa-solid fa-location-dot"/> {{ item.address }}</span>
                                </div>
                                <div class="mb-2">
                                    <div v-if="item.education_type == 'Swasta'">
                                        <span class="text-[#F4933A] text-xs md:text-base">
                                            <i class="fa-solid fa-minus"></i> Swasta
                                        </span>
                                    </div>
                                    <div v-if="item.education_type == 'Negeri'">
                                        <span class="text-[#0AA8C1] text-xs md:text-base">
                                            <i class="fa-solid fa-minus"></i> Negeri
                                        </span>
                                    </div>
                                </div>
                                <div class="mb-2">
                                    <p class="text-[#7E8CA0] text-xs md:text-base">Uang masuk mulai dari</p>
                                    <h2 class="font-semibold text-xs md:text-base">{{ formatIDR(item.min_registration_fee) }}</h2>
                                </div>
                                <div>
                                    <button class="bg-[#0AA8C1] w-fit py-2 px-2 md:px-4 text-white rounded-4xl text-[11px] md:text-base flex gap-1"><i class="fa-solid fa-globe content-center"></i>Pendaftaran Online</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex content-center items-center gap-10 justify-center mt-[70px]">
                <div class="border-b border-[#E6E9ED] w-full hidden lg:block">

                </div>
                <button class="border border-[#0AA8C1] bg-white py-3 rounded-lg w-full md:w-1/2 hover:bg-[#0AA8C1] hover:text-white text-[#0AA8C1] cursor-pointer">
                   Jurusan Lainnya (+{{totalKampus}})
                </button>
                <div class="border-b border-[#E6E9ED] w-full hidden lg:block">

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {useKampus} from '@/composables/fetchKampus'
const config = useRuntimeConfig()

const {
    kampus,
    totalKampus,
    fetchKampus
} = useKampus()

onMounted( async()=>{
    await fetchKampus()
})

const getImageUrl = (path) => {
  return path.startsWith('http') ? path : `${config.public.API_BASE_URL}${path}`
}

const formatIDR = (number) => {
    return new Intl.NumberFormat("id-ID",{
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0
    }).format(number)
}

</script>
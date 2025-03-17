<template>
    <div class="py-[20px] md:py-[50px] relative px-4">
        <div class="bg-dot left-20 top-[100px] -z-50 hidden lg:block"></div>
        <div class="container mx-auto">
            <div>
                <div class="text-center">
                    <h2 class="text-[#3C3B52] text-3xl font-bold mb-3">Rekomendasi Jurusan/Prodi</h2>
                    <p class="text-[#848B9D] text-sm">Memberikan sistim pelayanan untuk para calon mahasiswa Jawa Barat dan Banten</p>
                </div>
            </div>
            <div class="grid grid-cols-2 xl:grid-cols-4 gap-5 mt-6">
                <div v-for="(item,index) in jurusan" :key="index +1" :class="`p-4 rounded-lg ${colors[index % colors.length]}`">
                    <div class="flex items-center gap-2 mb-4">
                        <div :class="`${decoColors[index % decoColors.length]} w-[10px] h-[10px] `" />
                        <span class="capitalize text-xs md:text-sm text-[#3C3B52]">{{item.field}}</span>
                    </div>
                    <div>
                        <span class="text-xs md:text-base">{{item.name}}</span>
                    </div>
                </div>
            </div>
            <div class="flex content-center items-center gap-10 justify-center mt-[70px]">
                <div class="border-b border-[#E6E9ED] w-full hidden lg:block">

                </div>
                <button class="border border-[#0AA8C1] bg-white py-3 rounded-lg w-full md:w-1/2 hover:bg-[#0AA8C1] hover:text-white text-[#0AA8C1] cursor-pointer">
                   Kampus Lainnya (+{{totaljurusan}})
                </button>
                <div class="border-b border-[#E6E9ED] w-full hidden lg:block">

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {useJurusan} from '@/composables/fetchJurusan'

const {
    jurusan,
    totaljurusan,
    fetchJurusan
} = useJurusan()

onMounted( async()=>{
    await fetchJurusan()
})

const colors =[
    'bg-[#F2F7FF]','bg-[#FDF4FC]', 'bg-[#FFF2F5]', 'bg-[#EDFBFD]',
    'bg-[#FFF5EC]','bg-[#EDFBFD]', 'bg-[#EFF5FF]', 'bg-[#FFF2F5]' 
]
const decoColors =[
    'bg-[#1256BB]','bg-[#AD4D9E]', 'bg-[#E83158]', 'bg-[#0AA8C1]',
    'bg-[#F4933A]','bg-[#0AA8C1]', 'bg-[#1256BB]', 'bg-[#E83158]' 
]

</script>
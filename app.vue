<template>
    <NuxtLayout>
      
      <!-- Slider Banner -->
      <SliderBanner/>

      <div class="container mx-auto my-[20px] sm:my-[72px] px-4">
        <div class="bg-gradient-to-br from-[#126ABB] to-[#0AB6C1] py-[30px] px-[40px] rounded-xl">
          <div class="grid grid-cols-1 md:grid-cols-2 xl:flex xl:flex-row gap-5 items-center">
            <div class="flex ">
              <div class="pr-5">
                <div class="bg-[#3BD7F0] h-[36px] w-[36px] text-center rounded-full content-center">
                  <span class="text-white text-base ">1</span>
                </div>
              </div>
              <div class="pr-5">
                <div>
                   <span class="text-white font-semibold">Cari Kampus & Prodi</span> 
                </div>
                <div>
                  <span class="text-[#D5E9EF] text-xs">Consectetur adipiscing elit. Urna amet hac senectus in consequat orci duis pellentesque.</span>
                </div>
              </div>
            </div>
            <div class="border-r border-white/10 h-[119px] hidden xl:block"/>
            <div class="flex ">
              <div class="pr-5">
                <div class="bg-[#3BD7F0] h-[36px] w-[36px] text-center rounded-full content-center">
                  <span class="text-white text-base ">2</span>
                </div>
              </div>
              <div class="pr-5">
                <div>
                   <span class="text-white font-semibold">Bandingkan</span> 
                </div>
                <div>
                  <span class="text-[#D5E9EF] text-xs">Consectetur adipiscing elit. Urna amet hac senectus in consequat orci duis pellentesque.</span>
                </div>
              </div>
            </div>

            <div class="border-r  border-white/10 h-[119px] hidden xl:block"/>

            <div class="flex">
              <div class="pr-5">
                <div class="bg-[#3BD7F0] h-[36px] w-[36px] text-center rounded-full content-center">
                  <span class="text-white text-base ">3</span>
                </div>
              </div>
              <div class="pr-5">
                <div>
                   <span class="text-white font-semibold">Uji Potensi</span> 
                </div>
                <div>
                  <span class="text-[#D5E9EF] text-xs">Consectetur adipiscing elit. Urna amet hac senectus in consequat orci duis pellentesque.</span>
                </div>
              </div>
            </div>
            <div class="border-r  border-white/10 h-[119px] hidden xl:block"/>

            <div class="flex">
              <div class="pr-5">
                <div class="bg-[#3BD7F0] h-[36px] w-[36px] text-center rounded-full content-center">
                  <span class="text-white text-base ">4</span>
                </div>
              </div>
              <div class="pr-5">
                <div>
                   <span class="text-white font-semibold">Daftar</span> 
                </div>
                <div>
                  <span class="text-[#D5E9EF] text-xs">Consectetur adipiscing elit. Urna amet hac senectus in consequat orci duis pellentesque.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tentang Kami -->
      <div class="py-[20px] sm:py-[72px] relative px-4">
        <div class="bg-dot right-[100px] -z-20 top-0 hidden lg:block"/>
        <div class="container mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 class="font-bold text-3xl mb-5">Tentang Kami</h2>
              <p class="text-[#3C3B52] leading-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, suspendisse turpis sed convallis diam id. Vestibulum at eget pellentesque ullamcorper cras scelerisque arcu. Vel ornare bibendum porta faucibus. 
                Eu semper eget rhoncus aenean eu eget purus. Euismod tincidunt posuere vulputate nec cras facilisis ac. Ultrices vulputate non ut adipiscing viverra.
              </p>
            </div>
            <div class="grid grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
              <div class="bg-[#FFF5EC] rounded-lg flex flex-col sm:flex-row justify-center sm:justify-normal items-start sm:items-center px-5 sm:px-8 h-[99px]">
                <div class="bg-[#FC871B] w-[48px] lg:w-[60px] flex justify-center items-center h-[48px] rounded-xl mr-3">
                  <i class="fa-solid fa-pen-to-square text-white"/>
                </div>
                <div class="flex justify-between gap-6 w-full">
                  <div class="content-center">
                    <span class="text-[#3C3B52]">Kampus</span>
                  </div>
                  <div>
                    <i class="fa-solid fa-arrow-right text-[#FC871B]"/>
                  </div>
                </div>
              </div>
              <div class="bg-[#E7FDFD] rounded-lg flex flex-col sm:flex-row justify-center sm:justify-normal items-start sm:items-center px-5 sm:px-8  h-[99px]">
                <div class="bg-[#0AA8C1]  w-[48px] lg:w-[60px] flex justify-center items-center h-[48px] rounded-xl mr-3">
                  <i class="fa-solid fa-graduation-cap text-white"/>
                </div>
                <div class="flex justify-between gap-6 w-full">
                  <div class="content-center">
                    <span class="text-[#3C3B52]">Jurusan</span>
                  </div>
                  <div>
                    <i class="fa-solid fa-arrow-right text-[#0AA8C1]"/>
                  </div>
                </div>
              </div>
              <div class="bg-[#FEF0F3] rounded-lg flex flex-col sm:flex-row justify-center sm:justify-normal items-start sm:items-center px-5 sm:px-10  h-[99px]">
                <div class="bg-[#E83158] w-[48px] lg:w-[60px] flex justify-center items-center h-[48px] rounded-xl mr-3">
                  <i class="fa-solid fa-graduation-cap text-white"/>
                </div>
                <div class="flex justify-between gap-6 w-full">
                  <div class="content-center">
                    <span class="text-[#3C3B52]">Pendaftaran</span>
                  </div>
                  <div>
                    <i class="fa-solid fa-arrow-right text-[#E83158]"/>
                  </div>
                </div>
              </div>
              <div class="bg-[#F2F5FF] rounded-lg flex flex-col sm:flex-row justify-center sm:justify-normal items-start sm:items-center px-5 sm:px-10  h-[99px]">
                <div class="bg-[#3A5AE3] w-[48px] lg:w-[60px] flex justify-center items-center h-[48px] rounded-xl mr-3">
                  <i class="fa-solid fa-clipboard-list text-white"/>
                </div>
                <div class="flex justify-between gap-6 w-full">
                  <div class="content-center">
                    <span class="text-[#3C3B52]">Uji Potensi</span>
                  </div>
                  <div>
                    <i class="fa-solid fa-arrow-right text-[#3A5AE3]"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Rekomendasi Kampus -->
      <RekomendasiKampus/>

      <!-- Rekomendasi Jurusan -->
      <RekomendasiJurusan/>
    </NuxtLayout>
</template>
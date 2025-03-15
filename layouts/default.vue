<template>
    <div>
        <div class="py-[13px]  border-b border-[#E6E9ED] bg-white sticky top-0 px-4 z-50">
            <div class="container mx-auto flex justify-between">
                <div class="content-center">
                    <img src="/assets/images/logo.png" alt="logo" class="img-fluid cursor-pointer">
                </div>
                <div class="border border-[#0AA8C1] p-1 w-full max-w-[500px] hidden lg:flex justify-between items-center rounded-sm">
                    <div class="flex w-100">
                        <div class="px-5 content-center">
                            <img src="/assets/images/search.png" alt="search">
                        </div>
                        <input type="text" placeholder="Cari kampus/prodi impian Anda disini..." class="w-full px-2 py-2 focus:outline-none">
                    </div>
                    <div>
                        <button class="rounded-lg bg-[#0AA8C1] text-white w-[68px] h-[40px] cursor-pointer">Cari</button>
                    </div>
                </div>
                <div class="hidden lg:flex gap-1.5">
                    <button class="border border-[#0AA8C1] w-[99px] h-[48px] text-[#0AA8C1] rounded-sm hover:bg-[#0AA8C1] hover:text-white cursor-pointer">
                        Daftar
                    </button>
                    <button class="bg-[#0AA8C1] w-[99px] h-[48px] text-white rounded-sm cursor-pointer">
                        Login
                    </button>
                </div>
                <div class="flex lg:hidden">
                    <div class="px-5 content-center">
                        <img src="/assets/images/search.png" alt="search">
                    </div>
                    <div class="content-center">
                        <i class="fa-solid fa-bars text-[#0AA8C1]"></i>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <slot />
        </div>
        <footer class="container mx-auto px-4">        
            <div class="bg-gradient-to-br from-[#126ABB] to-[#0AB6C1] pt-[80px] pb-[60px] px-10 sm:px-[60px] rounded-xl">
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-10 2xl:gap-30">
                    <div class="sm:col-span-2">
                        <h2 class="text-white font-semibold mb-7">
                            Tentang Kami
                        </h2>
                        <p class="text-white">Membantu siswa mencari dan membandingkan informasi perguruan tinggi di Jawa Barat dan Banten agar bisa meraih impian 
                            lewat kampus idaman dan jurusan yang sesuai dengan passion.
                        </p>
                    </div>
                    <div class="">
                        <h2 class="text-white font-semibold mb-7">
                            Layanan
                        </h2>
                        <ul>
                            <li class="mb-5 text-white"><a href="/">Daftar Kampus</a></li>
                            <li class="mb-5 text-white"><a href="/">Daftar Prodi/jurusan</a></li>
                            <li class="mb-5 text-white"><a href="/">Artikel/Berita</a></li>
                        </ul>
                    </div>
                    <div class="">
                        <h2 class="text-white font-semibold mb-7">Kontak Kami</h2>
                        <ul>
                            <li class="mb-5 text-white"><a href="/" class="flex gap-3"><i class="fa-solid fa-envelope content-center"/>email@company.com</a></li>
                            <li class="mb-10 text-white"><a href="/" class="flex gap-3"><i class="fa-solid fa-phone-volume content-center"/> <span class="whitespace-nowrap">+62 32984343234</span></a></li>
                            <li>
                                <button class="bg-white py-3 px-4 flex gap-3 rounded-sm">
                                  <img src="/assets/images/googleplay.png" alt="googleplay">  <span class="whitespace-nowrap">Download Aplikasi</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="flex flex-col sm:flex-row justify-between my-9 text-center">
                <div class="self-center">
                    <img src="/assets/images/logo.png" alt="logo" class="img-fluid cursor-pointer">
                </div>
                <div>
                    <h4 class="text-sm text-[#848B9D]">Copyright © 2020 Kampus Jabar Banten</h4>
                </div>
            </div>
        </footer>
    </div>
</template>
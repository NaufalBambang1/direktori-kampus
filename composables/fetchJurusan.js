const jurusan = ref([])
const totaljurusan = ref(0)

export function useJurusan(){
    const fetchJurusan = async ({homepage = true, full =true} = {}) =>{
        const url = new URL (`/api-campus/open/studyprogram/all`, window.location.origin)
        const params = new URLSearchParams({
            homepage: homepage.toString(),
            full: full.toString()
        })

        url.search = params.toString()
        try{
            const response = await $fetch(url,{
                method:'GET',
                headers: {
                    'api-key' : '4Qe7h5NcgCu1EPDzCKIO'
                }
            })
            jurusan.value = response.data.slice(0, 8)
            totaljurusan.value = response.meta.totalItems
        }catch(er){
            console.error('Gagal Fetching', er)
        }
    }
    return{
        jurusan,
        totaljurusan,
        fetchJurusan
    }
}
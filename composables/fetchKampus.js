const kampus = ref([])
const totalKampus = ref(0)

export function useKampus(){
    const fetchKampus = async ({homepage = true, full =true} = {}) =>{
        const url = new URL (`/api-campus/open/college/all`, window.location.origin)
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
            kampus.value = response.data.slice(0, 8)
            totalKampus.value = response.meta.totalItems
        }catch(er){
            console.error('Gagal Fetching All College', er)
        }
    }
    return{
        kampus,
        totalKampus,
        fetchKampus
    }
}
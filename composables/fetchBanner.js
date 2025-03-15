const banner = ref([])
const totalBanner =ref (0)

export function useBanner(){
    const fetchBanner = async ({position = 'home-banner'}={}) =>{
        const url = new URL (`/api-campus/open/banner/all`,window.location.origin)
        const params = new URLSearchParams({
            position: position.toString()
        })

        url.search = params.toString()
        try{
            const response = await $fetch (url,{
                method: 'GET',
                headers: {
                    'api-key' : '4Qe7h5NcgCu1EPDzCKIO'
                }
            })
            banner.value = response.data
            totalBanner.value = response.meta.totalItem

        }catch(er){
            console.error('Gagal Fetching', er)
        }
    }
    return{
        banner,
        totalBanner,
        fetchBanner
    }
}
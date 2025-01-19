import { onMounted,ref } from "vue";
import {getListAPI} from '@/api/main'

export function useList(){
    const DataList=ref({})
    const getList=async ()=>{
        try {
            const res = await getListAPI();
            DataList.value = res.map(item => ({ ...item.attributes }));
            // console.log(DataList.value);
            
        } catch (error) {
            console.error("Failed to fetch list:", error);
        }
    };
    
    onMounted(() => getList())
    
    return {DataList}
}
import request from './request';

export function getTopBanners(){
    return request({
        url:"/banner?type=0",
        withCredentials: true 
    })
}
export function getHotRecommend(limit){
    return request({
        url:"/personalized?limit="+limit,
        withCredentials: true 
    })
}
export function getNewAlbum(limit){
    return request({
        url:"/album/new",
        withCredentials: true,
        params:{
            limit
        }
    })
}
// 所有榜单
export function getTopList(idx){
    return request({
        url:"/toplist",
        withCredentials: true, 
        params:{
            idx
        }
    })
}
// 榜单列表
export function getPlayList(id){
    return request({
        url:"/playlist/detail",
        withCredentials: true, 
        params:{
            id
        }
    })
}


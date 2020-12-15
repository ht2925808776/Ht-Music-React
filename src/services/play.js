import request from './request';
export const getSongDetail = (ids)=>{
    return request({
        url:"/song/detail",
        withCredentials: true, //关键
        params:{
            ids
        }
    })
}
export const getLyric=(id)=>{
    return request({
        url:"/lyric",
        withCredentials: true, //关键
        params:{
            id
        }
    })
}
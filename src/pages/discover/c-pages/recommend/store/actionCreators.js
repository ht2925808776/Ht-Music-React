import * as actionTypes from './constants';

import {
    getTopBanners,
    getHotRecommend,
    getNewAlbum,
    getTopList,
    getPlayList
} from '@/services/recommend';


const changeTopBannerAction = (res)=>({
    type:actionTypes.CHANGE_TOP_BANNERS,
    topBanner:res.banners
})
export const getTopBannerAction = ()=>{
    return dispatch=>{
        //在这边发送网络请求，网络请求接口，我们一般会定义一个文件，
        // 专门存放请求的接口
        // 一般我们放在services中
        getTopBanners().then(res=>{
            // console.log(res);
            dispatch(changeTopBannerAction(res))
        })
    }
}
const changeHotRecommendAction = (res)=>({
    type:actionTypes.CHANGE_HOT_RECOMMEND,
    hotRecommend:res.result
})
export const getHotRecommendAction=(limit)=>{
    // 这边的dispatch从哪传来的？？？？？
    return dispatch=>{
        getHotRecommend(limit).then(res=>{
            // console.log(res);
            // dispatch传递对象
            // 如果传递的是对象，dispatch就会直接来到reducer函数里面去执行switch了
            dispatch(changeHotRecommendAction(res));
        })
    }
}
export const getNewAlbumAction=(limit)=>{
    return dispatch =>{
        getNewAlbum(limit).then(res=>{
            // console.log('bbbbbbbbbbbbb',res);
            dispatch({
                type:actionTypes.CHANGE_NEW_ALBUM,
                newAlbum:res.albums
            })
        })
    }
}
export const getTopListAction=(idx)=>{
    return dispatch=>{
        getTopList(idx).then(res=>{
            // console.log(idx);
            // console.log('aaaaaaaaaa',res);
            const id0=res.list[0].id;
            const id1=res.list[1].id;
            const id2=res.list[2].id;
            const obj0={title:res.list[0]};
            const obj1={title:res.list[1]};
            const obj2={title:res.list[2]};
            if(idx === 0){
                getPlayList(id0).then(res=>{
                    obj0.list=res.playlist.tracks;
                    dispatch({
                        type:actionTypes.CHANGE_RANKINGLIST1,
                        rankingList1:obj0
                    })
                })
            }else if(idx === 1){
                getPlayList(id1).then(res=>{
                    obj1.list=res.playlist.tracks;
                    dispatch({
                        type:actionTypes.CHANGE_RANKINGLIST2,
                        rankingList2:obj1
                    })
                })
            }else if(idx === 2){
                getPlayList(id2).then(res=>{
                    obj2.list=res.playlist.tracks;
                    dispatch({
                        type:actionTypes.CHANGE_RANKINGLIST3,
                        rankingList3:obj2
                    })
                })
            }
        })
    }
}
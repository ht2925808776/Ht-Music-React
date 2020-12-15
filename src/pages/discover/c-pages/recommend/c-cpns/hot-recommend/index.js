import React, { memo ,useCallback, useEffect} from 'react';
import {useDispatch, useSelector,shallowEqual} from "react-redux"

import HTThemeHeaderRCM from '@/components/theme-header-rcm';

import HTSongsCover from '@/components/songs-cover';

import {HotRecommendWrap} from './style';
import {getHotRecommendAction} from '../../store/actionCreators';

export default memo(function HTHotRecommend() {
    // 拿取数据
    const {hotRecommend} = useSelector((state)=>({
        hotRecommend:state.getIn(["recommendReducer","hotRecommend"])
    }),shallowEqual)


    // 发送请求
    const dispatch = useDispatch();
    useEffect(()=>{
        // 使用这个dispatch，
        // dispatch传递的函数，它会把方法执行，并且会把dispatch传递过去
        dispatch(getHotRecommendAction(8))
    },[dispatch]);

    // 更多的点击事件
    const moreFun=useCallback((t)=>{
        console.log(t);
    },[]);

    return (
        <HotRecommendWrap>
            <HTThemeHeaderRCM title="热门推荐" navList={["华语","流行","摇滚","民谣","电子"]} moreFun={moreFun}/>
            <div className="hot-recom">
                {
                    hotRecommend.map((item,index)=>{
                        return(
                            <HTSongsCover key={item.id} info={item}></HTSongsCover>
                        )
                    })
                }
            </div>
        </HotRecommendWrap>
    )
})

import React, { memo, useEffect ,useRef, useState,useCallback} from 'react';
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { getTopBannerAction } from '../../store/actionCreators';

import { Carousel } from 'antd';

import {
    TopBannerWrap
} from './style'

export default memo(function HTTopBanner() {
    const [currentIndex, setcurrentIndex] = useState(0);
    const { topBanner } = useSelector((state) => ({
        topBanner: state.getIn(["recommendReducer", "topBanner"])
    }), shallowEqual);
    const bannerRef=useRef();

    const dispatch = useDispatch();
    useEffect(() => {
        // 使用这个dispatch，
        // dispatch传递的函数，它会把方法执行，并且会把dispatch传递过去
        dispatch(getTopBannerAction());
    }, [dispatch]);

    // 如果此方法是子组件调用的，要加useCallback包裹
    const BgImgFun=useCallback((from,to)=>{
        setcurrentIndex(to);
    },[]);
    const BgImg =topBanner[currentIndex] && (topBanner[currentIndex].imageUrl+"?imageView&blur=40x20");
    
    return (
        // BgImg，通过属性传值给style
        <TopBannerWrap BgImg={BgImg}>
            <div className="banner wrap-v2" >
                <div className="left">
                    {/* 通过对Carousel的改变前事件，来监听当前轮播到哪一个图片，接收一个函数 */}
                    <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={BgImgFun}>
                        {
                            topBanner.map((item,index)=>{
                                return (
                                    <div key={item.imageUrl}>
                                        <img src={item.imageUrl} alt=""/>
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </div>
                <div className="right"></div>
                {/* 点击上一页下一页，使用useRef来获取 Carousel走马灯组件，调用Carousel的上一个下一个方法就可以了*/}
                <div className="left-button" onClick={e=>{bannerRef.current.prev()}}></div>
                <div className="right-button" onClick={e=>{bannerRef.current.next()}}></div>
            </div>
        </TopBannerWrap>
    )
})

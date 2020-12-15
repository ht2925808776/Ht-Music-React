import React, { memo, useEffect, useCallback, useRef } from 'react';
import { useDispatch, shallowEqual, useSelector } from "react-redux";

import { Carousel } from 'antd';
import HTThemeHeaderRCM from '@/components/theme-header-rcm';
import HTAlbumCover from '@/components/album-cover';

import { getNewAlbumAction } from '../../store/actionCreators';
import { NewAlbumWrap } from './style';

export default memo(function HTNewAlbum() {
    const carousel = useRef();
    const { newAlbum } = useSelector(state => ({
        newAlbum: state.getIn(["recommendReducer", "newAlbum"])
    }), shallowEqual);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getNewAlbumAction(10))
    }, [dispatch]);

    // 更多的点击事件
    const moreFun = useCallback((t) => {
        console.log(t);
    }, []);
    return (
        <NewAlbumWrap>
            <HTThemeHeaderRCM title="新碟上架" moreFun={moreFun} />
            <div className="carousel-wrap">
                <button className="arrow sprite_02 arrow-left" onClick={e=>{carousel.current.prev()}}></button>
                <div className="album">
                    <Carousel autoplay dots={false} ref={carousel}>
                        {
                            [0,1].map((item)=>{
                                return(
                                    <div key={item} className="album-ul">
                                        {
                                            newAlbum.slice(item*5,(item+1)*5).map((iteg,index)=>{
                                                return(
                                                    <HTAlbumCover key={iteg.id} 
                                                                className="album-list" 
                                                                info={iteg}
                                                                size="100px"
                                                                width="118px"
                                                                bgp="-570px"
                                                                />
                                                )
                                            })
                                        }
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </div>
                <button className="arrow sprite_02 arrow-right" onClick={e=>{carousel.current.next()}}></button>
            </div>
        </NewAlbumWrap>
    )
})

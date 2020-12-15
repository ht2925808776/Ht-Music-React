import React, { memo } from 'react';
import {useDispatch} from "react-redux";

import {getSongDetailAction} from '@/pages/player/store/actionCreator'
import {getSizeImage} from '@/utils/format-utils'
import { TopRankingWrap } from './style';

export default memo(function HTTopRanking(props) {
    const { info } = props;
    const {title={},list=[]}=info;//如果请求的数据很多，接口反应会很慢的话，这边最好把列表单独拿一下，并给一个默认值

    const dispatch = useDispatch();
    const addPlayerList=(song)=>{
        console.log(song.id);
        dispatch(getSongDetailAction(song.id));
    }
    return (
        <TopRankingWrap>
            <div className="ranking-top">
                <img src={getSizeImage(title.coverImgUrl,80)} alt="" />
                <span>{title.name}</span>
                <a href="/todo" className="btns play sprite_02">播放</a>
                <a href="/todo" className="btns favor sprite_02">收藏</a>
            </div>
            <div className="ranking-center">
                {
                    list.slice(0,10).map((item,index)=>{
                        return(
                            <div key={item.id} className="tracks-list">
                                <span className="list-no">{index+1}</span>
                                <a href="/todo" className="list-name text-nowrap">{item.name}</a>
                                <div className="list-opera">
                                    <button href="/todo" className="sprite_02 play" onClick={e=>addPlayerList(item)} />
                                    <button href="/todo" className="sprite_icon2 add"/>
                                    <button href="/todo" className="sprite_02 favor"/>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="ranking-bottom">
                <a href="/todo">查看更多  &gt;</a>
            </div>
        </TopRankingWrap>
    )
})

import React, { memo ,useCallback,useEffect} from 'react';
import {useDispatch, useSelector,shallowEqual} from "react-redux";

import HTThemeHeaderRCM from '@/components/theme-header-rcm';
import HTTopRanking from '@/components/top-ranking';

import {getTopListAction} from '../../store/actionCreators';
import {RecommendRankingWrap} from './style';

export default memo(function HTRecommendRanking() {
    const {rankingList1,rankingList2,rankingList3} = useSelector((state)=>({
        rankingList1:state.getIn(["recommendReducer","rankingList1"]),
        rankingList2:state.getIn(["recommendReducer","rankingList2"]),
        rankingList3:state.getIn(["recommendReducer","rankingList3"])
    }),shallowEqual);

    const dispatch= useDispatch();
    useEffect(() => {
      dispatch(getTopListAction(0));
      dispatch(getTopListAction(1));
      dispatch(getTopListAction(2));
    }, [dispatch])

    // 更多的点击事件
    const moreFun=useCallback((t)=>{
        console.log(t);
    },[]);
    return (
        <RecommendRankingWrap>
            <HTThemeHeaderRCM title="榜单" moreFun={moreFun}/>
            <div className="ranking-ul-wrap">
                <HTTopRanking info={rankingList1}/>
                <HTTopRanking info={rankingList2}/>
                <HTTopRanking info={rankingList3}/>
            </div>
        </RecommendRankingWrap>
    )
})

import React, { memo} from 'react';


import HTTopBanner from './c-cpns/top-banner';
import HTHotRecommend from './c-cpns/hot-recommend';
import HTNewAlbum from './c-cpns/new-album';
import HTRecommendRanking from './c-cpns/recommend-ranking';

import {
    RecommendWrap,
    ContentWrap,
    ContentLeftWrap,
    ContentRightWrap
} from './style';

function HTRecommend(props) {
    return (
        <RecommendWrap>
            <HTTopBanner/>
            <ContentWrap className="wrap-v2">
                <ContentLeftWrap>
                    <HTHotRecommend/>
                    <HTNewAlbum/>
                    <HTRecommendRanking/>
                </ContentLeftWrap>
                <ContentRightWrap>rr</ContentRightWrap>
            </ContentWrap>
        </RecommendWrap>
    )
}


export default memo(HTRecommend);

// function HTRecommend(props) {
//     // 8：拿到数据
//     const {getBanners,topBanner} = props;
//     // 7：发送网络请求
//     useEffect(()=>{
//         getBanners();
//     },[getBanners])
//     return (
//         <div>
//             Recommend:{topBanner.length}
//         </div>
//     )
// }
// // 4：定义
// const mapStateToProps=(state)=>({
//     topBanner:state.recommendReducer.topBanner
// })
// const mapDispatchToProps=(dispatch)=>({
//     getBanners:()=>{
//         dispatch(getTopBannerAction());
//     }
// })
// // 1：修改函数导出的方式
// // 3：使用connect,connect返回一个高阶组件，然后把组件传入高阶组件
// export default connect(mapStateToProps,mapDispatchToProps)(memo(HTRecommend));

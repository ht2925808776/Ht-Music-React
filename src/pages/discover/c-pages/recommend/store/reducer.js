import {Map} from 'immutable';//1：导入
import * as actionTypes from './constants';
// 2：使用Map包裹（一般展示性的数据都用Map，如果需要操作的数据就使用fromJS）
const defaultState=Map({
    topBanner:[],
    hotRecommend:[],
    newAlbum:[],
    rankingList1:{},
    rankingList2:{},
    rankingList3:{}
})
function reducer(state = defaultState,action){
    switch(action.type){
        case actionTypes.CHANGE_TOP_BANNERS:
            // 3：这边state已经被Map了，所以可以使用set
            return state.set("topBanner",action.topBanner)
        case actionTypes.CHANGE_HOT_RECOMMEND:
            return state.set("hotRecommend",action.hotRecommend)
        case actionTypes.CHANGE_NEW_ALBUM:
            return state.set("newAlbum",action.newAlbum)
        case actionTypes.CHANGE_RANKINGLIST1:
            return state.set("rankingList1",action.rankingList1)
        case actionTypes.CHANGE_RANKINGLIST2:
            return state.set("rankingList2",action.rankingList2)
        case actionTypes.CHANGE_RANKINGLIST3:
            return state.set("rankingList3",action.rankingList3)
        default:
            return state;
    }
}
export default reducer;


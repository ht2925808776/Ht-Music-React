import {Map} from "immutable";
import  * as ConstTypes from './constants';

const initVal=Map({
    playerList:[],
    currentSongIndex:0,
    songDetail:{},
    playType:0, //0:循环播放 1：随机播放  2：单曲播放
    lycriList:[],
    currentLycriIndex:0
})
function reducer(state=initVal,action){
    switch(action.type){
        case ConstTypes.APP_PLAY_BAR:
            return state.set("songDetail",action.songDetail)
        case ConstTypes.APP_PLAYlIST:
            return state.set("playerList",action.playerList)
        case ConstTypes.APP_CURRENTSONGINDEX:
            return state.set("currentSongIndex",action.currentSongIndex)
        case ConstTypes.APP_PLAYTYPE:
            return state.set("playType",action.playType)
        case ConstTypes.APP_LYCRILIST:
            return state.set("lycriList",action.lycriList)
        case ConstTypes.APP_CURRENT_LYCRI_INDEX:
            return state.set("currentLycriIndex",action.currentLycriIndex)
        default:
            return state;
    }
}
export default reducer;



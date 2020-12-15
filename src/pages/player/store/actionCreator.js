import {getSongDetail,getLyric} from '@/services/play'; 
import {analysisLyric} from '@/utils/pares-lyric'; 
import {APP_PLAY_BAR,APP_PLAYlIST,APP_CURRENTSONGINDEX, APP_PLAYTYPE,APP_LYCRILIST,APP_CURRENT_LYCRI_INDEX} from './constants';

const changeSongDetail=(song)=>{
    return {
        type:APP_PLAY_BAR,
        songDetail:song
    }
}
const changeCurrentSongIndex=(index)=>{
    return {
        type:APP_CURRENTSONGINDEX,
        currentSongIndex:index
    }
}
const changePlayerList=(list)=>{
    return{
        type:APP_PLAYlIST,
        playerList:list
    }
}
export const ChangePlayTypeAction=(playType)=>{
    return{
        type:APP_PLAYTYPE,
        playType
    }
}
export const ChangeSongAction=(flag)=>{
    return (dispatch,getState)=>{
        // flag:-1切换上一首   1：切换下一首
        // 切换歌曲和播放类型有关，切换当前歌曲和当前的index值，
        // 1：循环播放、单曲播放，切歌的时候正常切换， 2：随机播放，切歌的时候，切换一个随机数
        const playList=getState().getIn(["playReducer","playerList"]);
        let currentIndex=getState().getIn(["playReducer","currentSongIndex"]);
        const playType=getState().getIn(["playReducer","playType"]);
        let prevCurrentIndex=currentIndex;//记录上一次index
        // 判断下一首,上一首
        currentIndex+=flag;
        if(currentIndex >= playList.length){currentIndex=0;}
        if(currentIndex<0){currentIndex=playList.length-1;}
        // 判断播放类型
        if(playType === 1){//随机播放
            // 获取一个随机数
            currentIndex=Math.floor(Math.random() * playList.length);
            while(prevCurrentIndex === currentIndex){
                currentIndex=Math.floor(Math.random() * playList.length);
            }
        }
        dispatch(changeCurrentSongIndex(currentIndex));
        dispatch(changeSongDetail(playList[currentIndex]));
        // 获取歌曲
        dispatch(getLyricAction(playList[currentIndex].id));
    }
}

export const getSongDetailAction=(ids)=>{
    // dispatch一个函数的时候，不仅会传递dispatch还会把getState传递过来
    return (dispatch,getState)=>{
        // 1、根据ids来判断当前歌曲是否在播放列表中
        //      循环列表
        const playList=getState().getIn(["playReducer","playerList"]);
        //      遍历并获取当前id歌曲在列表中的索引值,如果是-1不存在列表中，如果大于-1，返回的就是歌曲的下标
        const currentIndex=playList.findIndex(song=>song.id === ids);

        // 2、在列表：修改当前index、当前播放歌曲
        if(currentIndex !== -1){//在列表
            const currentSong=playList[currentIndex];
            dispatch(changeCurrentSongIndex(currentIndex))
            dispatch(changeSongDetail(currentSong));
            // 获取歌曲
            dispatch(getLyricAction(currentSong.id));
        }else{//不在列表：获取新歌曲，把歌曲添加到播放列表的最后，并修改当前index、当前播放歌曲
            getSongDetail(ids).then(res=>{
                const song=res.songs && res.songs[0];
                if(!song) return;
                const newPlayList=[...playList];
                newPlayList.push(song);//push操作不要写在dispatch里面的change方法，不管用
                dispatch(changePlayerList(newPlayList));
                dispatch(changeCurrentSongIndex(newPlayList.length-1));
                dispatch(changeSongDetail(song));
                // 获取歌曲
                dispatch(getLyricAction(song.id));
            })
            
        }

        
    }
}
const lycriListAction=(lycriList)=>{
    return{
        type:APP_LYCRILIST,
        lycriList
    }
}
// 获取歌词
export const getLyricAction=(id)=>{
    return dispatch=>{
        getLyric(id).then(res=>{
            const lyric=res.lrc.lyric;
            // 解析歌词
            const lyricList=analysisLyric(lyric);
            dispatch(lycriListAction(lyricList));
        })
    }
}
export const getCurrentLycriIndexAction=(currentLycriIndex)=>({
    type:APP_CURRENT_LYCRI_INDEX,
    currentLycriIndex
})
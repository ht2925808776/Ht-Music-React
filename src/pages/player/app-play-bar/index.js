import React, { memo, useEffect, useRef, useState, useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { NavLink } from "react-router-dom";

import { Slider } from 'antd';
import { message } from 'antd';

import { getSizeImage, formatMinuteSecond, getPlaySong } from '@/utils/format-utils';
import { ChangePlayTypeAction, ChangeSongAction ,getCurrentLycriIndexAction} from '../store/actionCreator';
import { AppPlayBarWrap } from './style';

export default memo(function HTAppPlayBar() {
    const dispatch = useDispatch();

    const { songDetail, playType, playerList,lycriList,currentLycriIndex } = useSelector((state) => ({
        songDetail: state.getIn(["playReducer", "songDetail"]),
        playType: state.getIn(["playReducer", "playType"]),
        playerList: state.getIn(["playReducer", "playerList"]),
        lycriList:state.getIn(["playReducer","lycriList"]),
        currentLycriIndex:state.getIn(["playReducer","currentLycriIndex"])
    }), shallowEqual);
    const audioRef = useRef();
    const [currentTime, setcurrentTime] = useState("00:00");//记录当前播放到的秒数
    const [progressVal, setprogressVal] = useState(0);
    const [progressFlag, setprogressFlag] = useState(false);
    const [playFlag, setplayFlag] = useState(false);
    const playListLength = playerList.length;

    // 当前播放的歌曲，所有的页面都可以点击播放其它歌曲，所以这边要把当前播放歌曲放到redux中管理，方便后面修改
    useEffect(() => {
        // dispatch(getSongDetailAction(167876));
    }, [dispatch]);

    useEffect(() => {
        // 页面加载，给audio设置播放音频（audio在浏览器中是默认不能播放的）
        audioRef.current.src = getPlaySong(songDetail.id);//设置audio的资源地址
        // 设置页面播放,audio有一个play方法，此方法返回值是promise
        audioRef.current.play().then(res=>{//播放成功
            setplayFlag(true);
        }).catch(err=>{//播放失败
            setplayFlag(false);
        })
    }, [songDetail])

    // other handle 其它处理
    const picUrl = (songDetail.al && songDetail.al.picUrl) || "";//加小括号，使用|| （如果前面括号里面的为假，执行""）
    const name = (songDetail.ar && songDetail.ar[0].name) || "";
    const totalTime = songDetail.dt || 0;//歌曲总时长

    // 点击播放
    const playMusic = useCallback(() => {
        playFlag ? audioRef.current.pause() : audioRef.current.play();//设置audio的播放事件
        setplayFlag(!playFlag);
    }, [playFlag])
    // 播放回调函数
    const timeUpdate = (e) => {
        // e是返回的参数:e.target.currentTime当前时间，单位是秒
        const time = e.target.currentTime * 1000;
        if (!progressFlag) {
            setcurrentTime(formatMinuteSecond(time));//设置播放事件
            setprogressVal(time / totalTime * 100);//设置播放进度
        }

        // 显示歌词
        // 遍历歌词数组，如果当前时间小于歌词列表里某一个的时间，就显示上一个数组中的歌词
        // let currentIndex=-1;
        // for(let i=0;i<lycriList.length;i++){
        //     if(time<lycriList[i].time){
        //         currentIndex=i;//记录当前的index
        //         break;//跳出循环
        //     }
        // }
        // console.log(lycriList[currentIndex-1].content);
        // 上面代码优化如下
        let i=0;
        for(;i<lycriList.length;i++){
            if(time<lycriList[i].time){
                break;//跳出循环
            }
        }
        const newCurrentLycriIndex=i-1;//这边获取到的i会非常多，很多重复的，所以要判断，如果i改变了，才进行修改
        if(currentLycriIndex !==newCurrentLycriIndex){
            dispatch(getCurrentLycriIndexAction(newCurrentLycriIndex));
            let currentContent=(lycriList[newCurrentLycriIndex] && lycriList[newCurrentLycriIndex].content) || "";
            message.open({
                content:currentContent,
                key:"lycri",
                duration:0,
            });
        }

    }

    // silder回调函数:滑动滑块
    // useCallback给子组件绑定的事件
    const sliderChange = useCallback((value) => {
        // console.log(value);
        setprogressFlag(true);
        setprogressVal(value);//设置播放进度
        // eg:30位置 / 总长度100 =所占比例 => 0.3 * 241840歌曲总毫秒数
        setcurrentTime(formatMinuteSecond(value / 100 * totalTime))// 设置时间，单位秒
    }, [totalTime])
    // silder回调函数:滑动滑块后鼠标抬起事件
    const sliderAfterFun = useCallback((value) => {
        // 当鼠标滑动完毕后，抬起时，修改音乐进度（修改audio的currentTime）单位毫秒
        audioRef.current.currentTime = value / 100 * totalTime / 1000;//value/100*totalTime：当前播放到的毫秒数 /1000换算成秒
        setcurrentTime(formatMinuteSecond(value / 100 * totalTime))
        setprogressFlag(false);

        if (!playFlag) {//暂停后，滑动进度条，自动播放
            playMusic();
        }
    }, [totalTime, playFlag, playMusic]);//此处依赖playMusic，
    // 而playMusic是一个常量const，所以也没每次渲染，这边每次都会被重新渲染，
    // 解决方法就是给playMusic也包裹一个useCallback

    // 切换循环，随机，单曲
    const ChangePlayType = () => {
        let newPlayType = playType + 1;
        if (newPlayType === 3) {
            newPlayType = 0;
        }
        dispatch(ChangePlayTypeAction(newPlayType));
    }

    // 点击上一首、下一首
    const changeSong = (flag) => {
        // 因为切换歌曲需要操作很多的action，拿取修改数据，所以我们这边的代码都放到actionCreator写,
        // 因为actionCreator中没有dispatch，这边我们需要传递过去
        dispatch(ChangeSongAction(flag));
    }
    // 监听当前歌曲是否是自动播放完成的
    const playEnd=()=>{
        // 当正在播放的歌曲播放完成后，如果是随机和循环的都会自动播放下一首，
        if(playType === 2){//如果是单曲循环的话,修改值
            audioRef.current.currentTime=0;
            audioRef.current.play();
        }else{
            dispatch(ChangeSongAction(1));
        }
    }
    return (
        <AppPlayBarWrap className="sprite_playbar" playFlag={playFlag} playType={playType}>
            <div className="play-left">
                <button className="sprite_playbar prev" onClick={e => changeSong(-1)}></button>
                <button className="sprite_playbar play" onClick={e => playMusic()}></button>
                <button className="sprite_playbar next" onClick={e => changeSong(1)}></button>
            </div>
            <div className="play-center">
                <NavLink to="/discover/player" className="play-img">
                    <img src={getSizeImage(picUrl, 34)} alt="" />
                </NavLink>
                <div className="play-progress">
                    <p>{songDetail.name}<span>{name}</span></p>
                    <Slider defaultValue={0} value={progressVal} onChange={sliderChange} onAfterChange={sliderAfterFun} />
                </div>
                <div className="play-time">
                    <span className="now-time">{currentTime}</span>
                    <span className="total-time">/&emsp;{formatMinuteSecond(totalTime)}</span>
                </div>
            </div>
            <div className="play-right">
                <div className="btn-left">
                    <button className="sprite_playbar favor"></button>
                    <button className="sprite_playbar share"></button>
                </div>
                <div className="btn-right sprite_playbar">
                    <button className="sprite_playbar volume"></button>
                    <button className="sprite_playbar loop" onClick={e => ChangePlayType()}></button>
                    <button className="sprite_playbar playlist">{playListLength}</button>
                </div>
            </div>
            {/*播放事件(audio有一个属性onTimeUpdate，播放回调函数,可以记录当前播放的时间，等等，要给它传入函数，是一个回调函数形式)  */}
            <audio ref={audioRef} onTimeUpdate={e=>timeUpdate(e)}  onEnded={e=>playEnd()}/>
        </AppPlayBarWrap>
    )
})

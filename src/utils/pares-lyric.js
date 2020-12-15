// 解析歌词
const parseExp=/\[(\d{2}):(\d{2})\.(\d{2,3})\]/;
export const analysisLyric=(lyricString)=>{
    let lyricLine=lyricString.split("\n")
    lyricLine=lyricLine.slice(0,lyricLine.length-2);
    // console.log(lyricLine);
    let lyric=[];
    for(let aa of lyricLine){
        const result= parseExp.exec(aa);
        if(!result) continue;//此句匹配不到匹配下一句
        const time1=result[1]*60*1000;//分钟*60转成秒 *1000转成毫秒
        const time2=result[2]*1000;//秒*1000转成毫秒
        const time3=result[3].length===3?result[3]*1:result[3]*10;//毫秒两位的要*10，三位的不用，*1是把result[3]转成数字
        const time= time1+time2+time3;
        const content=aa.replace(parseExp,"").trim();//replace:把正则表达式部分的替换成空字符串
        const obj={time,content};
        lyric.push(obj);
    }
    return lyric;
}
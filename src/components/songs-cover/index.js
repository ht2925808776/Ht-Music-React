import React, { memo } from 'react';


import { SongsCover } from './style';
import {
    getSizeImage,
    getCount
} from '@/utils/format-utils'

export default memo(function HTSongsCover(props) {
    const { info } = props;
    return (
        <SongsCover>
            <div className="song-item">
                <img src={getSizeImage(info.picUrl,140)} alt="" />
                <p><i  className="sprite_icon erji"></i>{getCount(info.playCount)}</p>
            </div>
            <p className="text-nowrap p1">{info.name}</p>
            <p className="text-nowrap copy">by:{info.copywriter}</p>
        </SongsCover>
    )
})

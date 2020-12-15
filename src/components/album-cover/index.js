import React, { memo } from 'react';


import { AlbumCover } from './style';

import { getSizeImage } from '@/utils/format-utils'

export default memo(function HTAlbumCover(props) {
    // props:state和props
    const { info, size = "100px", width = "118px", bgp = "-570px" } = props;

    return (
        <AlbumCover size={size} width={width} bgp={bgp}>
            <div className="album-img">
                <img src={getSizeImage(info.picUrl, size)} alt="" />
                <a href="/#" className="sprite_covor">{info.name}</a>
            </div>
            <div className="album-info">
                <p className="album-info-name1 text-nowrap">{info.name}</p>
                <p className="album-info-name2">{info.artist.name}</p>
            </div>
        </AlbumCover>
    )
})

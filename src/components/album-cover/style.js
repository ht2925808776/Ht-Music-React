import styled from "styled-components";

export const AlbumCover = styled.div`
margin-top:10px;
    .album-img{
        width:${props=>props.width};
        height:${props=>props.size};
        position: relative;
        img{
            width:${props=>props.size};
        }
        a{
            position:absolute;
            top:0px;
            left:0px;
            width:100%;
            height:100%;
            display:inline-block;
            width:${props=>props.width};
            background-position:0px ${props=>props.bgp};
            text-indent:-9999px;
        }
    }
    .album-info{
        font-size:12px;
        .album-info-name1{
            width:${props=>props.width};
            color:#000;
        }
        .album-info-name2{
            color:#666;
        }
    }
`

import styled from "styled-components";

export const SongsCover=styled.div`
    width:140px;
    margin:10px 0px;
    .song-item{
        position:relative;

        img{
            width:140px;
            height:140px;
        }
        p{
            height:27px;
            position:absolute;
            bottom:0px;
            left:0px;
            color:#fff;
            width:100%;
            line-height:27px;
            background:rgba(0,0,0,0.5);
            font-size:12px;
            color:#CCC;
            padding-left:4px;
        }
        .erji {
          margin-right: 5px;
          display: inline-block;
          width: 14px;
          height: 11px;
          background-position: 0 -24px;
        }
    }
    .p1{
        font-size:14px;
        color:#000;
        margin-top:10px;
    }
    .copy{
        font-size:12px;
        color:#666;
    }
`

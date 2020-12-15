import styled from "styled-components";

export const NewAlbumWrap=styled.div`

    .carousel-wrap{
        display:flex;
        justify-content:center;
        align-items: center;
        border:1px solid #d3d3d3;
        margin:20px 0px;
        background:#f5f5f5;
        .arrow {
            width: 25px;
            height: 17px;
            cursor: pointer;
        }
        .arrow-left {
            background-position: -260px -75px;
        }
        .arrow-right {
            background-position: -300px -75px;
        }
        .album{
            width: 640px;
            height: 150px;

            .album-ul{
                /* 更改原来ant里面的代码样式 */
                display: flex !important;
                justify-content: space-between;
                align-items: center;
                .album-list{
                    width:118px;
                    height:150px;
                }
            }
        }

    }

`

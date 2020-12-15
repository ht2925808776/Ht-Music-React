import styled from "styled-components";

export const AppPlayBarWrap = styled.div`
    position:fixed;
    bottom:0px;
    left:0px;
    width:100%;
    height:53px;
    background-position:0px 0px;
    background-repeat:repeat-x;
    display:flex;
    align-items:center;
    justify-content:center;
    padding-top:6px;

    .play-left{
        button{
            vertical-align:middle;
            cursor: pointer;
        }
        .prev{
            width: 28px;
            height: 28px;
            background-position: 0 -130px;
        }
        .play{
            width: 36px;
            height: 36px;
            margin: 0 8px;
            background-position: 0 ${props => props.playFlag ? "-165px" : "-204px"};
        }
        .next{
            width: 28px;
            height: 28px;
            background-position: -80px -130px;
        }   
    }
    .play-center{
        margin:0px 30px;
        display:flex;
        align-items:center;
        .play-img{
            display:inline-block;
            width:34px;
            height:34px;
            /* margin:11px 10px 0px 0px; */
            img{
                border-radius:5px;
            }
        }
        .play-progress{
            margin-left:10px;
            padding-top:5px;
            p{
                padding-left:5px;
                height:20px;
                line-height:20px;
                color:#e8e8e8;
                span{
                    margin-left:10px;
                    color:#9b9b9b;
                    display:inline-block;
                }
            }

            /* 覆盖ant默认样式 */
            .ant-slider{
                margin-top:0px;
                width: 493px;
                margin-right: 10px;

                .ant-slider-rail {
                    height: 9px;
                    background: url(${require("@/assets/img/progress_bar.png").default}) right 0;
                }

                .ant-slider-track {
                    height: 9px;
                    background: url(${require("@/assets/img/progress_bar.png").default}) left -66px;
                }

                .ant-slider-handle {
                    width: 22px;
                    height: 24px;
                    border: none;
                    margin-top: -7px;
                    background: url(${require("@/assets/img/sprite_icon.png").default}) 0 -250px;
                }
            }
        }
        .play-time{
            margin-top:20px;
            color:#797979;
            .now-time{
                color: #e1e1e1;
            }
            .total-time{
                margin: 0 3px;
            }
        }
    }
    .play-right{    
        display:flex;
        align-items:center;
        .btn-left{
            button{
                width: 25px;
                height: 25px;
                vertical-align:middle;
                cursor: pointer;
            }
            .favor{
                background-position: -88px -163px;
            }
            .share{
                background-position: -114px -163px;
            }
        }
        .btn-right{
            display: flex;
            align-items: center;
            width: 126px;
            padding-left: 13px;
            background-position: -147px -248px;

            button{
                width: 25px;
                height: 25px;
                cursor: pointer;
            }
            .volume{
                background-position: -2px -248px;
            }
            .loop{
                background-position:${props=>{
                    switch(props.playType){
                        case 1:
                            return "-66px -248px"
                        case 2:
                            return "-66px -344px"
                        default:
                            return "-3px -344px"
                    }
                }};
            }
            .playlist{
                padding-left: 18px;
                text-align: center;
                color: #ccc;
                width: 59px;
                background-position: -42px -68px;
            }
        }

    }

`

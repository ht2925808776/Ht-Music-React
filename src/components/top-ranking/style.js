import styled from "styled-components";

export const TopRankingWrap=styled.div`
    width:230px;
    height:472px;
    .ranking-top{
        position: relative;
        width:230px;
        height:120px;

        img{
            position:absolute;
            top:20px;
            left:20px;
        }
        span{
            position:absolute;
            top:28px;
            left:110px;
            color:#000;
            font-weight:bold;
            font-size:14px;
        }
        .btns{
            position:absolute;
            width:22px;
            height:22px;
        }
        .play{
            top:66px;
            left:110px;
            background-position: -267px -205px;
            text-indent:-99999px;
        }
        .favor{
            top:66px;
            left:140px;
            background-position: -300px -205px;
            text-indent:-99999px;
        }
    }
    .ranking-center{

        .tracks-list{
            padding-left:10px;
            height:32px;
            line-height:32px;
            display:flex;

            :nth-child(-n+3) .list-no{
                color:#c10d0c;
            }
            .list-no{
                width:30px;
                height:32px;
                line-height:32px;
                font-size:16px;
                color:#666;
                text-align:center;
            }
            .list-name{
                text-align:left;
                flex:1;
            }
            
            .list-opera{
                display: flex;
                align-items: center;
                display: none;
                width: 90px;
                button{
                    display:inline-block; 
                    width:20px;
                    height:20px;
                    text-indent:-99999px;
                    vertical-align: middle;
                    margin:0px 2px 0px 0px;
                }

                .play{
                    background-position: -267px -268px;
                }
                .add{
                    margin-top:4px;
                    background-position: 0 -700px;
                }
                .favor{
                    background-position: -297px -268px;
                }
            }
            &:hover{
                .list-opera{
                    display:block;
                }
            }
        }
        
    }
    .ranking-bottom{
        text-align:right;
        a{
            display:inline-block;
            height:32px;
            line-height:32px;
            margin-right:20px;
        }
    }
`


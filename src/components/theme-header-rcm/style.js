import styled from "styled-components";

export const ThemeHeaderRcmWrap = styled.div`
    display:flex;
    justify-content:space-between;
    border-bottom:2px solid red;
    height:35px;
    line-height:35px;
    .left{
        flex:1;
        .title{
            color:#333;
            font-size:20px;
            display:inline-block;
            margin-right:20px;
            padding-left:30px;
            background-position: -225px -154px;
        }
        .nav-list-wrap{
            display:inline-block;
        }
        .nav-list{
            display:inline-block;
            color:#666;
            span{
                padding:0px 10px;
            }
            &:last-child span{
                display:none;
            }
        }
    }
    .right{
        width:50px;
        display:inline-block;
        padding-right:20px;
        background-position: 30px -229px;;
    }
    
`


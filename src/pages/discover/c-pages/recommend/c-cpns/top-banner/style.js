import styled from "styled-components";
import img1 from "@/assets/img/download.png";
import leftButton from '@/assets/img/banner-control-left.png';
import rightButton from '@/assets/img/banner-control-right.png';

export const TopBannerWrap=styled.div`
    background:url(${props => props.BgImg}) center center/6000px;

    .banner{
        position:relative;
        height:285px;
        .left{
            width:730px;
            position:absolute;
            top:0px;
            left:0px;
            
            img{
                width:100%;
                height:285px;
            }
        }
        .right{
            position:absolute;
            right:0px;
            top:0px;
            background-image:url(${img1});
            width:254px;
            height:285px;
        }
        .left-button{
            position:absolute;
            width:37px;
            height:63px;
            left:-50px;
            top:50%;
            margin-top:-32px;
            background-image:url(${leftButton});
        }
        .right-button{
            position:absolute;
            width:37px;
            height:63px;
            right:-50px;
            top:50%;
            margin-top:-32px;
            background-image:url(${rightButton});
        }
    }


`
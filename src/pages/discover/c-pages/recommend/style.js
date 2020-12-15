import styled from "styled-components";
import moduleName from '@/assets/img/wrap-bg.png';

export const RecommendWrap=styled.div`
    /* background:url(${moduleName}) center center; */
    background:#eee;
    background-size:100% 100%;
`
export const ContentWrap=styled.div`
    background:#fff;
    display:flex;
    justify-content:space-between;
`
export const ContentLeftWrap=styled.div`
    padding:20px 20px 40px;
    flex:1;
    border-left:1px solid #D3D3D3;
`
export const ContentRightWrap=styled.div`
    width:250px;
    border-left:1px solid #D3D3D3;
    border-right:1px solid #D3D3D3;
`
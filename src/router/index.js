import React from 'react'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

// 使用路由懒加载，直接使用React给我们提供的一个方法lazy方法，此方法接收函数为参数
const HYDiscover=React.lazy(()=>import("@/pages/discover"));
const HYMine=React.lazy(()=>import("@/pages/mine"));
const HYFriend=React.lazy(()=>import("@/pages/friend"));
const HTRecommend=React.lazy(()=>import("@discover/recommend"));
const HTRanking=React.lazy(()=>import("@discover/ranking"));
const HTSongs=React.lazy(()=>import("@discover/songs"));
const HTDJRadio=React.lazy(()=>import("@discover/djradio"));
const HTArtist=React.lazy(()=>import("@discover/artist"));
const HTAlbum=React.lazy(()=>import("@discover/album"));
const HTAppPlayer=React.lazy(()=>import("@/pages/player"));

// import HYDiscover from '@/pages/discover';
// import HYMine from '@/pages/mine';
// import HYFriend from '@/pages/friend';
// import HTRecommend from '@discover/recommend';
// import HTRanking from '@discover/ranking';
// import HTSongs from '@discover/songs';
// import HTDJRadio from '@discover/djradio';
// import HTArtist from '@discover/artist';
// import HTAlbum from '@discover/album';
// import HTAppPlayer from '@/pages/player';

const routes=[
    {
        path:"/",
        exact:true,
        // 路由重定向Redirect
        // component:HYDiscover,
        render:()=>(
            <Redirect to="/discover"/>
        )
    },
    {
        path:"/discover",
        component:HYDiscover,
        routes:[
            {
                path:"/discover",
                exact:true,
                render:()=>(
                    <Redirect to="/discover/recommend"/>
                )
            },
            {
                path:"/discover/recommend",
                component:HTRecommend
            },
            {
                path:"/discover/ranking",
                component:HTRanking
            },
            {
                path:"/discover/songs",
                component:HTSongs
            },{
                path:"/discover/djradio",
                component:HTDJRadio
            },{
                path:"/discover/artist",
                component:HTArtist
            },{
                path:"/discover/album",
                component:HTAlbum
            },{
                path:"/discover/player",
                component:HTAppPlayer
            }
        ]
    },{
        path:"/mine",
        component:HYMine
    },{
        path:"/friend",
        component:HYFriend
    }
];
export default routes;
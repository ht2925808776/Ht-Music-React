import React, { memo } from 'react';
import {NavLink} from "react-router-dom"
import {renderRoutes} from "react-router-config";

import {DiscoverWrap,TopMenu} from './style';

import {dicoverMenu} from "@/common/local-data";

export default memo(function HTDiscover(props) {
    return (
        <DiscoverWrap>
            <div className="top">
                <TopMenu className="wrap-v1">
                    {
                        dicoverMenu.map((item,index)=>{
                            return (
                                <div className="item" key={item.title}>
                                    <NavLink to={item.link}>{item.title}</NavLink>
                                </div>
                            )
                        })
                    }
                </TopMenu>
            </div>
            {renderRoutes(props.route.routes)}
        </DiscoverWrap>
    )
})

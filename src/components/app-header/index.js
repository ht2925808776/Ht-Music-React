// 导入第三方库
import React, { memo } from 'react';
// 导入组件
import { NavLink } from 'react-router-dom';
import { HeaderWrapper, HeaderLeft, HeaderRight } from "./style";
import { Input } from "antd";
import { SearchOutlined } from '@ant-design/icons';
// 导入自己写的组件
import { headerLinks } from "@/common/local-data";

export default memo(function HTAppHeader() {
    const showItem = (item, index) => {
        // 前三个是路由，后三个是链接
        if (index < 3) {
            return (<NavLink to={item.link} exact>
                {item.title}
                <i className="sprite_01 icon"></i>
            </NavLink>)
        } else {
            return <a href={item.link}>{item.title}</a>
        }
    }
    return (
        <HeaderWrapper>
            <div className="content wrap-v1">
                <HeaderLeft>
                    <a className="logo sprite_01" href="#/">网易云音乐</a>
                    <div className="select-list">
                        {
                            headerLinks.map((item, index) => {
                                return (
                                    <div className="select-item" key={item.title}>
                                        {showItem(item, index)}
                                    </div>
                                )
                            })
                        }
                    </div>
                </HeaderLeft>
                <HeaderRight>
                    <Input className="search" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />} />
                    <div className="center">创作者中心</div>
                    <div className="">登录</div>
                </HeaderRight>
            </div>
            <div className="divider"></div>
        </HeaderWrapper>
    )
})

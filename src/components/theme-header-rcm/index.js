import React, { memo } from 'react'

import { ThemeHeaderRcmWrap } from './style'

export default memo(function HTThemeHeaderRCM(props) {
    const { title, navList = [] } = props;
    return (
        <ThemeHeaderRcmWrap>
            <div className="left">
                <p className="title sprite_02">{title}</p>
                <div className="nav-list-wrap">
                    {
                        navList.map((item, index) => {
                            return (
                                <div key={item} className="nav-list">
                                    <a href="todo">{item}</a><span>|</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="right more sprite_02" onClick={e => { props.moreFun(title) }}>
                更多
            </div>
        </ThemeHeaderRcmWrap>
    )
})

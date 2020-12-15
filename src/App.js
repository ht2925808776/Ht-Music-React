import React, { memo, Suspense } from 'react';
import { renderRoutes } from "react-router-config";
import { HashRouter } from "react-router-dom";
import { Provider } from 'react-redux';//5：导入Provider

import routes from "./router";
import store from './store';//5：导入store

import HTAppHeader from "./components/app-header";
import HTAppFooter from "./components/app-footer";
import HTAppPlayBar from './pages/player/app-play-bar';

export default memo(function App() {
    return (
        // 6：共享store
        <Provider store={store}>
            <HashRouter>
                <HTAppHeader />
                {/* fallback:应急措施的意思，如果路由加载不了，就使用此组件，要求传入一个组件 */}
                <Suspense fallback={<div>page loading</div>}>
                    {renderRoutes(routes)}
                </Suspense>
                <HTAppFooter />
                <HTAppPlayBar/>
            </HashRouter>
        </Provider>

    )
})

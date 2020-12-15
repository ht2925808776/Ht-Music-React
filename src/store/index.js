import {createStore,applyMiddleware,compose} from 'redux';//2：applyMiddleware合并中间件
// 2：引入中间件，因为需要中间件把页面的业务代码和redux结合起来
import thunk from 'redux-thunk';

import reducer from './reducer';

//1：因为reducer有很多，所以我们要合并成一个reducer，然后传给createStore
// 之前我们是在当前这个文件中合并的，现在我们把合并的代码放在reducer.js中了
// 3：配置浏览器中Redux调试工具(从浏览器中获取compose，如果安装了会获取到，如果没有的话，就用redux中默认的compose)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,composeEnhancers(applyMiddleware(thunk)));
// 4：导出store
export default store;
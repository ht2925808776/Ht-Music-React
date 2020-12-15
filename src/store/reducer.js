// import {combineReducers} from 'redux';//导出合并reducer的方法combine合并的意思
// 合并reducer不再使用redux中的combineReducers，而是使用redux-immutable中的combineReducers就可以了
import {combineReducers} from 'redux-immutable';

import {reducer as recommendReducer} from "../pages/discover/c-pages/recommend/store";
import {reducer as playReducer} from "../pages/player/store"

// 需要合并的reducer都放在这里
const cReducer = combineReducers({
    recommendReducer,
    playReducer
});
// 上面合并reducer后返回的所有reducer对象，这个对象也是会被频繁的操作的，
// 因为很多的reducer的修改数据和获取数据，都会导致这个对象被频繁的操作，
// 对象被频繁的操作，我们就可以使用immutable的Map来优化了，但是这边不能简单的使用Map来包裹对象，
// 因为combineReducers函数要求传入的是普通的对象，在combineReducers方法里面，
// 是对对象Object.keys(obj)这样进行遍历的，所以这边不能直接使用Map，
// 那如果想优化合并的reducer，怎么办呢？
// immutable有一个redux-immutable

export default cReducer;


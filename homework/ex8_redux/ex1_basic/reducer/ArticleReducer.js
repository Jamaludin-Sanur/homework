import {ACTION_TYPE} from '../action/ArticleAction.js';

export function articleReducer(state, action) {
    switch (action.type) {
        case ACTION_TYPE.ADD_ARTICLE:
            console.log("reducer detect action ADD_ARTICLE");
            return Object.assign({}, state, action);
        case ACTION_TYPE.DELETE_ARTICLE:
            console.log("reducer detect action DELETE_ARTICLE");
            return Object.assign({}, state, action);
        default :
            console.log("reducer detect unknown action");
            return state;
    }
};


export default  {articleReducer};


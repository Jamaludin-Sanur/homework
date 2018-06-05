
import {articleListener} from './listener/ArticleListener.js';
import {articleReducer} from './reducer/ArticleReducer.js';

const store = Redux.createStore(articleReducer);
store.subscribe(articleListener);

// // create new state
var newArticle = {
    type : "ADD_ARTICLE",
    payload : {
        title : "Article Title #1",
        content : "Article Content #1"
    }
};

// Log the initial state
console.log("start state");
console.dir(store.getState());

store.dispatch(newArticle);

// Log the final state
console.log("end state ");
console.dir(store.getState());




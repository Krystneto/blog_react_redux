import { combineReducers } from 'redux';
import PostsReducer from './Reducer_Posts';

const rootReducer = combineReducers({
  posts: PostsReducer
});

export default rootReducer;

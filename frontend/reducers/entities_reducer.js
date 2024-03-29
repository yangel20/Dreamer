
import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import photosReducer from "./photos_reducer";
import commentsReducer from "./comments_reducer";
import tagsReducer from "./tags_reducer";
import albumsReducer from "./albums_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  photos: photosReducer,
  comments: commentsReducer,
  tags: tagsReducer,
  albums: albumsReducer
});

export default entitiesReducer;
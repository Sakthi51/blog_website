import { configureStore} from '@reduxjs/toolkit';
import writeBlogReducer from "../reducer";

const store = configureStore({reducer: writeBlogReducer });

export default store;

import { configureStore } from '@reduxjs/toolkit';
import githubViewerReducer from '../features/githubViewer/githubViewerSlice';

export const store = configureStore({
  reducer: {
    githubViewer: githubViewerReducer
  },
});

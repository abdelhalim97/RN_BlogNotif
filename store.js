import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/CounterSlices';
import counterReducerTag from './slices/counterSlicesPosts';

const store = configureStore({
  reducer: {
      counter:counterReducer,
      counterTag:counterReducerTag,

  },

});
export default store
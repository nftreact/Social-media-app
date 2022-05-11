import { configureStore } from "@reduxjs/toolkit";
import database from "./Reducer";
import Explore from "./ReducerExplore";

export default configureStore({
  reducer: {
    data: database,
    dataExplore: Explore,
  },
});

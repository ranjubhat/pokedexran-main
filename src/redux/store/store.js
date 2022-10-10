import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { rootReducer } from "../reducers/rootReducer";
export default function configureStore() {
  const middleWares = [thunkMiddleware];
  const middleWareEnhancer = applyMiddleware(...middleWares);
  const store = createStore(rootReducer, middleWareEnhancer);
  return store;
}

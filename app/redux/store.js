import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, reducers)

 const store = createStore(reducers, applyMiddleware(thunk))
 export default store;

// export default () => {
//     let store = createStore(persistedReducer, applyMiddleware(thunk))
//     let persistor = persistStore(store)
//     return { store, persistor }
// }

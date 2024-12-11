import { applyMiddleware, combineReducers, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { thunk } from "redux-thunk"
import homeReducer from "./reducers/HomeData"
import detailReducer from "./reducers/DetailData"
import searchReducer from "./reducers/SearchData"

//Başlangıç durumunu tutan bir obje oluşturuyoruz.
let initialState = {

}


let reducers = combineReducers({
    getVideos: homeReducer,
    getVideo: detailReducer,
    getSearch: searchReducer
})


const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunk)))

export default store;
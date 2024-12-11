import { applyMiddleware, combineReducers, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { thunk } from "redux-thunk"
import homeReducer from "./reducers/HomeData"

//Başlangıç durumunu tutan bir obje oluşturuyoruz.
let initialState = {

}


let reducers = combineReducers({
    getVideos: homeReducer
})


const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunk)))

export default store;
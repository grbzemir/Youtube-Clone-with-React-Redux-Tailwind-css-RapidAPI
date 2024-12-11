
const homeReducer = (state = { getVideos: [] }, action) => {
    switch (action.type) {
        case 'GET_VIDEOS':
            return {
                ...state,
                getVideos: action.payload
            }
        default:
            return state
    }
}

export default homeReducer;
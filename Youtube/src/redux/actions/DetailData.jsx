import axios from 'axios';

const detailAction = (id) => async (dispatch) => {
    try {
        // Fetching data from API

        const options = {
            method: 'GET',
            url: 'https://youtube-v31.p.rapidapi.com/videos',
            params: {
                part: 'contentDetails,snippet,statistics',
                id: id
            },
            headers: {
                'x-rapidapi-key': '1f60cface1mshe4ec8983d98697dp1b3cacjsn731785c48b9c',
                'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            dispatch({
                type: 'GET_VIDEO',
                payload: response.data
            });
        } catch (error) {
            console.error(error);
        }
    }
    catch (error) {
        console.log(error);
    }
}

export default detailAction;
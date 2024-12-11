import axios from 'axios';

const searchAction = (keyword) => async (dispatch) => {
    try {
        // Fetching data from API

        const options = {
            method: 'GET',
            url: 'https://youtube-v31.p.rapidapi.com/search',
            params: {
                q: 'keyword',
                part: 'snippet,id',
                regionCode: 'US',
                maxResults: '50',
                order: 'date'
            },
            headers: {
                'x-rapidapi-key': '1f60cface1mshe4ec8983d98697dp1b3cacjsn731785c48b9c',
                'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            dispatch({
                type: 'GET_SEARCH',
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

export default searchAction;
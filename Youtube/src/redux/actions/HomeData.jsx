import axios from 'axios';

const homeAction = (data) => async (dispatch) => {
    try {
        // Fetching data from API

        const options = {
            method: 'GET',
            url: 'https://youtube-v31.p.rapidapi.com/search',
            params: {
                relatedToVideoId: '7ghhRHRP6t4',
                part: 'snippet',
                // type: 'video'
                q: data,
                maxResults: '50'
            },
            headers: {
                'x-rapidapi-key': '1f60cface1mshe4ec8983d98697dp1b3cacjsn731785c48b9c',
                'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            dispatch({
                type: 'GET_VIDEOS',
                payload: response.data.items
            });
        } catch (error) {
            console.error(error);
        }
    }
    catch (error) {
        console.log(error);
    }
}

export default homeAction;
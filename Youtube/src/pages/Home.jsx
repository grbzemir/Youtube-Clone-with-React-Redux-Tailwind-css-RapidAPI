import React, { useEffect } from 'react'
import HomeCard from '../components/HomeCard'
import Filter from '../components/Filter'
import { useSelector, useDispatch } from 'react-redux';
import homeAction from '../redux/actions/HomeData';

const Home = () => {
    const dispatch = useDispatch();
    const { getVideos } = useSelector(state => state.getVideos);
    const [letter, setLetter] = React.useState('new');

    useEffect(() => {
        dispatch(homeAction(letter));
    }, [dispatch, letter]);

    console.log("getVideos", getVideos);

    return (
        <div className="m-3">
            <Filter setLetter={setLetter} />
            <div className="flex flex-wrap m-2">
                {
                    getVideos?.items?.length > 0
                        ? getVideos.items.map((video, i) => <HomeCard key={i} video={video} />)
                        : <p>No videos available.</p>

                }
            </div>
        </div>
    );
}

export default Home;

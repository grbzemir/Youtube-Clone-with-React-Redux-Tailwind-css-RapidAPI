import React, { useEffect } from 'react'
import SearchCard from '../components/SearchCard'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'


const Search = () => {

    //params iç içe routerları göstermeye yarar ve url paramtetlerine erişebilirim
    const dispatch = useDispatch();
    const { keyword } = useParams();
    const { getSearch } = useSelector(state => state.getSearch);

    useEffect(() => {
        dispatch(searchAction(keyword));
    }, [dispatch, keyword]);

    console.log("getSearch", getSearch);

    return (
        <div>
            <SearchCard />
            <SearchCard />
            <SearchCard />
        </div>
    )
}

export default Search

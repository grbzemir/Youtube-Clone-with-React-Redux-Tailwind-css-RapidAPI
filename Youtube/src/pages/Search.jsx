import React, { useEffect } from 'react'
import SearchCard from '../components/SearchCard'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import searchAction from '../redux/actions/SearchData'



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
            {
                getSearch?.items?.length > 0
                    ? getSearch.items.map((search, i) => <SearchCard key={i} search={search} />)
                    : <p>No Search available.</p>

            }
        </div>
    )
}

export default Search

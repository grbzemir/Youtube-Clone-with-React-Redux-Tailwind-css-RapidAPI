import React from 'react'
import PropTypes from 'prop-types'
import dataFilter from '../assets/data/dataFilter'

const Filter = ({ setLetter }) => {
    return (
        <div className='flex items-center overflow-x-auto'>
            {
                dataFilter.map((data, i) => (
                    <div onClick={() => setLetter(data.name)} className="bg-gray-100 text-sm cursor-pointer hover:bg gray-200 px-3 py-1 mx-2 rounded-2xl" key={i}>{data.name}</div>
                ))
            }
        </div>
    )
}
Filter.propTypes = {
    setLetter: PropTypes.func.isRequired,
}

export default Filter


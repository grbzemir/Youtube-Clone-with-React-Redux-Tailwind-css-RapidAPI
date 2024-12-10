import React from 'react'
import dataFilter from '../assets/data/dataFilter'

const Filter = () => {
    return (
        <div className='flex items-center overflow-x-auto'>
            {
                dataFilter.map((data, i) => (
                    <div className="bg-gray-100 text-sm cursor-pointer hover:bg gray-200 px-3 py-1 mx-2 rounded-2xl" key={i}>{data.name}</div>
                ))
            }
        </div>
    )
}

export default Filter

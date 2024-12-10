import React from 'react'
import images from '../assets/images/images'

const HomeCard = () => {
    return (
        <div className="w-[300px] m-3">
            <img src={images.youtube1} alt="" />
            <div className="font-bold mt-2">Title Title Title Title Title</div>
            <div className="text-sm mt-1">Emircan Gürbüz </div>
            <div className="text-xs mt-1 tracking-wider text-gray-700">
                <span>100K Görüntülenme</span>
                <span>1 Yıl Önce</span>
            </div>



        </div>
    )
}

export default HomeCard

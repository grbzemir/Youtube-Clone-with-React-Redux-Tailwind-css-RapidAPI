import React from 'react'
import images from '../assets/images/images'

const HomeCard = () => {
    return (
        <div className="w-[280px] m-3 cursor-pointer">
            <img src={images.giphy} alt="" />
            <div className="font-bold mt-1">Lewandowski - Bayern Munich</div>
            <div className="text-sm mt-1 tracking-wider text-gray-700">Emircan Gürbüz </div>
            <div className="text-xs mt-1 tracking-wider text-gray-700">
                <span>100K Görüntülenme</span>
                <span>1 Yıl Önce</span>
            </div>
        </div>
    )
}

export default HomeCard

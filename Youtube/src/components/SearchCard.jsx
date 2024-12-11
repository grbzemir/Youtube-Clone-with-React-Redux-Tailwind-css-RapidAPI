import React from 'react';
import images from '../assets/images/images'; // Adjust the path as necessary

const SearchCard = () => {
    return (
        <div className="flex space-x-2 justify-center mx-5 my-10 cursor-pointer">
            <img src={images.giphy} alt="giphy" />
            <div className="w-2/3 space-y-2">
                <div className="font-bold text-lg">Lewangoalski - BayernMunich - Reactionssss</div>
                <div className="text-sm">
                    <span>3,5 B Görüntülenme *</span>
                    <br></br>
                    <span>3 Saat Önce</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                    <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                    <div className="text-gray-700">Bayern Munich</div>
                </div>
                <div className="text-sm text-gray-700">Emircan Gürbüz Full Stack Developer</div>
            </div>
        </div>
    );
}

export default SearchCard;

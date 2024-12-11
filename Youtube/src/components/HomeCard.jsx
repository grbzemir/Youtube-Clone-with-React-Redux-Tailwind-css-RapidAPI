import React from 'react'
import PropTypes from 'prop-types'
import images from '../assets/images/images'
import moment from 'moment'

const HomeCard = ({ video }) => {
    return (
        <div onClick={() => window.location = `videos/${video?.id?.videoId}`} className="w-[280px] m-3 cursor-pointer">
            <img src={video?.snippet?.thumbnails?.high?.url} alt="" />
            <div className="font-bold mt-1">{video?.snippet?.title.substring(0, 45)}...</div>
            <div className="text-sm mt-1 tracking-wider text-gray-700">{video?.snippet?.channelTitle} </div>
            <div className="text-xs mt-1 tracking-wider text-gray-700 space-x-4">
                <span>100.000 Görüntülenme</span>
                <span>{moment(video?.snippet?.publishedAt).startOf('day').fromNow()}</span>
            </div>
        </div>
    )
}
HomeCard.propTypes = {
    video: PropTypes.object.isRequired,
}

export default HomeCard


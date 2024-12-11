import React from 'react'
import ReactPlayer from 'react-player'
import PropTypes from 'prop-types'

const DetailCard = ({ video }) => {
    return (
        <div>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${video?.id}`} />
            <div className="font-bold text-2xl mt-1">{video?.snippet?.title}</div>
            <div>
                <span>
                    {video?.statistics?.viewCount} Görüntülenme
                </span>
            </div>
        </div>
    )
}
DetailCard.propTypes = {
    video: PropTypes.shape({
        id: PropTypes.string.isRequired,
        snippet: PropTypes.shape({
            title: PropTypes.string.isRequired
        }).isRequired,
        statistics: PropTypes.shape({
            viewCount: PropTypes.string.isRequired
        }).isRequired
    }).isRequired
}

export default DetailCard


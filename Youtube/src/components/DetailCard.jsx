import React from 'react'
import ReactPlayer from 'react-player'
import PropTypes from 'prop-types'
import moment from 'moment'

const DetailCard = ({ video }) => {
    return (
        <div>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${video?.id}`} />
            <div className="font-bold text-2xl mt-1">{video?.snippet?.title}</div>
            <div className="space-x-2 text-gray-800 mt-1">
                <span>
                    {video?.statistics?.viewCount} Görüntülenme
                </span>
                <span>
                    {moment(video?.snippet?.publishedAt).startOf('day').fromNow()}
                </span>
                <div>
                    <div className="text-gray-800 mt-1">
                        {video?.snippet?.description.substring(0, 250)}...
                    </div>
                    <div className='mt-2 text-xs text-blue-700'>
                        {

                            video?.snippet?.tags?.map((tag, i) => `#${tag}`)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
DetailCard.propTypes = {
    video: PropTypes.shape({
        id: PropTypes.string.isRequired,
        snippet: PropTypes.shape({
            title: PropTypes.string.isRequired,
            publishedAt: PropTypes.string.isRequired,
            description: PropTypes.string,
            tags: PropTypes.arrayOf(PropTypes.string)
        }).isRequired,
        statistics: PropTypes.shape({
            viewCount: PropTypes.string.isRequired
        }).isRequired
    }).isRequired
}

export default DetailCard


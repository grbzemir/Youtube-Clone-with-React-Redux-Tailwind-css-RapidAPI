import React from 'react'
import ReactPlayer from 'react-player'
import PropTypes from 'prop-types'
import moment from 'moment'
import Icons from '../assets/icons'

const DetailCard = ({ video }) => {
    return (
        <div className="mx-w-[650px] mx-20 my-10">
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
                    <div className="flex items-center text-gray-800 mt-3">
                        <span className="flex items-center"><Icons.like className="icon-style" />{video?.statistics?.likeCount}</span>
                        <span className="flex items-center"><Icons.dislike className="icon-style" /> Görüntülenme</span>
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
            viewCount: PropTypes.string.isRequired,
            likeCount: PropTypes.string
        }).isRequired
    }).isRequired
}

export default DetailCard


import React from 'react';

const VideoDetail = ({ video }) => {
    if (!video) {
        return <div>Loading...</div>
    } else {
        return (
            <div>
                <div className="ui segment">
                    <h4 className="ui header">{video.snippet.title.toUpperCase()}</h4>
                    <p>{video.snippet.description}</p>
                </div>
            </div>
        );
    }
}
export default VideoDetail;
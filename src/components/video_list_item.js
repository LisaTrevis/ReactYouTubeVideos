import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => { // ES6: {video} is the same thing as having const video = props.video and const onVideoSelect = props.onVideoSelect as variables with (props) as the argument instead of ({video, onVideoSelect}). It's saying that the first object in the arguments array has a property called video; please grab that property and create a new variable called video. We're then grabbing onVideoSelect from video_list.js
	const imageURL = video.snippet.thumbnails.default.url;
	return (
		// Whenever a user clicks on one of the <li>s, onClick will pass in that video to onVideoSelect 
		<li onClick={() => onVideoSelect(video)} className="list-group-item">

			<div className="video-list media">
				<div className="media-left">
					<img className="media-object" src={imageURL} />
				</div>
				<div className="media-body">
					<div className="media-heading">{video.snippet.title}</div>
				</div>
			</div>

		</li>
	);
};

export default VideoListItem;
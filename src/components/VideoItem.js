import './VideoItem.css';
import React from 'react';
import PropTypes from 'prop-types';

class VideoItem extends React.Component {
  constructor(props) {
    super(props);

    this.videoRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.videoRef);
  }

  render() {
    const { video, onVideoSelect } = this.props;

    return (
      // eslint-disable-next-line
    <div
        ref={this.videoRef}
        key={video.id.videoId + 1}
        className="item video-item"
        onClick={() => onVideoSelect(video)}
        role="button"
      >
        <img
          className="ui image"
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
        />
        <div className="content">
          <div className="header">{video.snippet.title}</div>
        </div>
      </div>
    );
  }
}

VideoItem.propTypes = {
  video: PropTypes.object,
  onVideoSelect: PropTypes.func,
};

export default VideoItem;

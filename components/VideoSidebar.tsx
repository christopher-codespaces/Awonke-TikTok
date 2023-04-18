import React, { useState } from 'react';
import './VideoSidebar.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';

interface Props {
  likes: number;
  shares: number;
  messages: number;
}

const VideoSidebar: React.FC<Props> = ({ likes, shares, messages }) => {
  const [liked, setLiked] = useState<boolean>(false);

  return (
    <div className="videoSidebar">
      <div className="videoSidebar_button">
        {liked ? (
          <FavoriteIcon fontSize="large" onClick={() => { setLiked(!liked); }} />
        ) : (
          <FavoriteBorderIcon fontSize="large" onClick={() => { setLiked(!liked); }} />
        )}
        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className="videoSidebar_button">
        <MessageIcon fontSize="large" />
        <p>{messages}</p>
      </div>
      <div className="videoSidebar_button">
        <ShareIcon fontSize="large" />
        <p>{shares}</p>
      </div>
    </div>
  );
};

export default VideoSidebar;

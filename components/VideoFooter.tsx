import React from 'react';
import './VideoFooter.css';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker';
import disk from './img/disk.png';

interface Props {
  channel: string;
  description: string;
  song: string;
}

const VideoFooter: React.FC<Props> = ({ channel, description, song }) => {
  return (
    <div className="videoFooter">
      <div className="videoFooter_text">
        <h3>@{channel}</h3>
        <p>{description}</p>
        <div className="videoFooter_ticker">
          <MusicNoteIcon className="videoFooter_icon" />
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>{song}</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img src={disk} alt="" className="videoFooter_record" />
    </div>
  );
};

export default VideoFooter;

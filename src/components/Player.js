import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';

const Player = () => {
  const [playing, setPlaying] = React.useState(false);

  return (
    <div style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', padding: '10px 0' }}>
      <BottomNavigation>
        <BottomNavigationAction icon={<SkipPreviousIcon />} />
        <BottomNavigationAction 
          icon={playing ? <PauseCircleOutlineIcon /> : <PlayCircleOutlineIcon />} 
          onClick={() => setPlaying(!playing)} 
        />
        <BottomNavigationAction icon={<SkipNextIcon />} />
      </BottomNavigation>
    </div>
  );
};

export default Player;

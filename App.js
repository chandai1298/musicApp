import React, {Component} from 'react';
import Player from './app/Player';
import TrackPlayer from 'react-native-track-player';
import {View} from 'react-native';

export const TRACKS = [
  {
    title: 'Stressed Out',
    artist: 'Twenty One Pilots',
    albumArtUrl:
      'http://36.media.tumblr.com/14e9a12cd4dca7a3c3c4fe178b607d27/tumblr_nlott6SmIh1ta3rfmo1_1280.jpg',
    audioUrl: 'https://www.soundjay.com/button/button-1.mp3',
  },
  {
    title: 'Love Yourself',
    artist: 'Justin Bieber',
    albumArtUrl:
      'http://arrestedmotion.com/wp-content/uploads/2015/10/JB_Purpose-digital-deluxe-album-cover_lr.jpg',
    audioUrl:
      'https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/pew2.aac',
  },
  {
    title: 'Hotline Bling',
    artist: 'Drake',
    albumArtUrl:
      'https://upload.wikimedia.org/wikipedia/commons/c/c9/Drake_-_Hotline_Bling.png',
    audioUrl:
      'https://drive.google.com/file/d/1H0c94Lm7mAGfsGf7fBLmu_my36d3YwP1/view?usp=sharinghttp://dl2.shirazsong.org/dl/music/94-10/CD%201%20-%20Best%20of%202015%20-%20Top%20Downloads/03.%20Drake%20-%20Hotline%20Bling%20.mp3',
  },
];

export default class App extends Component {
  render() {
    return <Player tracks={TRACKS} />;
  }
}

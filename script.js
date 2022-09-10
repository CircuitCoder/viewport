function bootstrap() {
  const player = videojs('main', {
    liveui: true,
  });

  const path = document.location.pathname.substr(1) || 'index';
  player.src({
    src: `/hls/${path}.m3u8`,
    type: 'application/x-mpegURL',
  });
}
